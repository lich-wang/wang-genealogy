---
schema: wang-person/v1
id: p_gL95C6iSo5JiMEeXTZCE27
status: active
merged_into: null
display_name: 王一奇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n6H9M9jQWRJ91uucyuX21B
        subject_person_id: p_gL95C6iSo5JiMEeXTZCE27
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8ANM3wLmzJise7wG3YE4DQ
          claim_id: c_n6H9M9jQWRJ91uucyuX21B
          source_id: s_Kc5F6E5doGQgJiHHc746xj
          stance: supports
          locator: CBDB:230478
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230478）
          source: &a1
            id: s_Kc5F6E5doGQgJiHHc746xj
            source_type: api_record
            title: 中国历代人物传记资料库：王一奇（CBDB 230478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230478&o=json
            external_identifier: CBDB:230478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2XbPWfMKvCzsEGApGj552R
        subject_person_id: p_gL95C6iSo5JiMEeXTZCE27
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一奇，明人物。萬曆丙戌科進士進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 230478）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oNHG0w7F8GwfPDJXUrVuB4
          claim_id: c_2XbPWfMKvCzsEGApGj552R
          source_id: s_Kc5F6E5doGQgJiHHc746xj
          stance: supports
          locator: CBDB:230478
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UOBLxQQo3tsPdJHwqV8E3n
        subject_person_id: p_1NFpKAdMuHUnaxbGrqKLeD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gL95C6iSo5JiMEeXTZCE27
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jCynlMKrWjU0h-TSN08kIw
          claim_id: c_UOBLxQQo3tsPdJHwqV8E3n
          source_id: s_zU-1x65syOK_hNwFT8b4SU
          stance: supports
          locator: CBDB：兄弟 王一鳴（207264）之父／母 王追美
          quotation: null
          interpretation_note: 由兄弟关系推断：王一奇 与 王一鳴 为同胞（CBDB 记「弟」），王一鳴 之父／母即 王一奇 之父／母。
          source:
            id: s_zU-1x65syOK_hNwFT8b4SU
            source_type: api_record
            title: 中国历代人物传记资料库：王一奇（CBDB 230478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230478&o=json
            external_identifier: CBDB:230478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1NFpKAdMuHUnaxbGrqKLeD
        status: active
        display_name: 王追美
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_h0a9GCefudrCe3rYYfMVQ8
        subject_person_id: p_gL95C6iSo5JiMEeXTZCE27
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JoYe56XoFscSqJvwbaT143
          claim_id: c_h0a9GCefudrCe3rYYfMVQ8
          source_id: s_zU-1x65syOK_hNwFT8b4SU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207264 王一鳴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zU-1x65syOK_hNwFT8b4SU
            source_type: api_record
            title: 中国历代人物传记资料库：王一奇（CBDB 230478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230478&o=json
            external_identifier: CBDB:230478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oYShNGR9e2YVy71LdVhQbQ
        status: active
        display_name: 王一鳴
        merged_into_person_id: null
---

# 王一奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一奇 | accepted |
| bio.summary | 王一奇，明人物。萬曆丙戌科進士進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 230478） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1NFpKAdMuHUnaxbGrqKLeD | 王追美 | accepted |
| other | p_oYShNGR9e2YVy71LdVhQbQ | 王一鳴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一奇（CBDB 230478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230478&o=json)
