---
schema: wang-person/v1
id: p_gTGhhZ4wcQDFUnuFCv55s7
status: active
merged_into: null
display_name: 王大賢
cbdb_id: 226931
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_baXgubaCVapdLUkGQrNs5U
        subject_person_id: p_gTGhhZ4wcQDFUnuFCv55s7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大賢，明人物。萬曆丙戌科進士進士，籍贯晉府儀衛司。（中国历代人物传记资料库 CBDB 226931）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_WnF5AsP1GTT8Id7XCbaTXS
          claim_id: c_baXgubaCVapdLUkGQrNs5U
          source_id: s_y3ixTVGYiCo64qaLoveAYc
          stance: supports
          locator: CBDB:226931
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_y3ixTVGYiCo64qaLoveAYc
            source_type: api_record
            title: 中国历代人物传记资料库：王大賢（CBDB 226931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226931&o=json
            external_identifier: CBDB:226931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sA1bgVCCGu71o54xmmj568
        subject_person_id: p_gTGhhZ4wcQDFUnuFCv55s7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PwAvhceLQyM98kRBGLZ634
          claim_id: c_sA1bgVCCGu71o54xmmj568
          source_id: s_y3ixTVGYiCo64qaLoveAYc
          stance: supports
          locator: CBDB:226931
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pi3NYEgChb_BS9hRdjXGcn
        subject_person_id: p_MZb3xwrJh2KS7jR6a3sirM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gTGhhZ4wcQDFUnuFCv55s7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NavR1Z3vvBIkdgtaID5DaE
          claim_id: c_pi3NYEgChb_BS9hRdjXGcn
          source_id: s_9NL5a6dFwj52u8h1nRZTSO
          stance: supports
          locator: CBDB：兄弟 王立賢（207055）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王大賢 与 王立賢 为同胞（CBDB 记「兄」），王立賢 之父／母即 王大賢 之父／母。
          source:
            id: s_9NL5a6dFwj52u8h1nRZTSO
            source_type: api_record
            title: 中国历代人物传记资料库：王大賢（CBDB 226931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226931&o=json
            external_identifier: CBDB:226931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MZb3xwrJh2KS7jR6a3sirM
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gjmzXfD_4kwAAHJe1WwU1U
        subject_person_id: p_NGHFT8W3h8WaBq7fkVhjck
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gTGhhZ4wcQDFUnuFCv55s7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kdZPNkPgE_1q-UnGvFipru
          claim_id: c_gjmzXfD_4kwAAHJe1WwU1U
          source_id: s_9NL5a6dFwj52u8h1nRZTSO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207055 王立賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9NL5a6dFwj52u8h1nRZTSO
            source_type: api_record
            title: 中国历代人物传记资料库：王大賢（CBDB 226931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226931&o=json
            external_identifier: CBDB:226931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NGHFT8W3h8WaBq7fkVhjck
        status: active
        display_name: 王立賢
        merged_into_person_id: null
---

# 王大賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大賢，明人物。萬曆丙戌科進士進士，籍贯晉府儀衛司。（中国历代人物传记资料库 CBDB 226931） | accepted |
| name.primary | 王大賢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MZb3xwrJh2KS7jR6a3sirM | 王佐 | accepted |
| other | p_NGHFT8W3h8WaBq7fkVhjck | 王立賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大賢（CBDB 226931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226931&o=json)
