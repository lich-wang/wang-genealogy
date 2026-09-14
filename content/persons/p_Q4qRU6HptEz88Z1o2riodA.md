---
schema: wang-person/v1
id: p_Q4qRU6HptEz88Z1o2riodA
status: active
merged_into: null
display_name: 王英
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9SDS9GFGUqCCER3b4NaCzV
        subject_person_id: p_Q4qRU6HptEz88Z1o2riodA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ATkG1kxMVwNqMfKhm5iT2B
          claim_id: c_9SDS9GFGUqCCER3b4NaCzV
          source_id: s_xW8KaLmGfhmCp1JA4QMdnJ
          stance: supports
          locator: CBDB:286135
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286135）
          source: &a1
            id: s_xW8KaLmGfhmCp1JA4QMdnJ
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 286135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286135&o=json
            external_identifier: CBDB:286135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.234Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_15PeR1QSxyrdLAdzCAwMKS
        subject_person_id: p_Q4qRU6HptEz88Z1o2riodA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英，明人物。正德十六年進士，籍贯石首。（中国历代人物传记资料库 CBDB 286135）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uosKzbumkB03eNXMBHTwei
          claim_id: c_15PeR1QSxyrdLAdzCAwMKS
          source_id: s_xW8KaLmGfhmCp1JA4QMdnJ
          stance: supports
          locator: CBDB:286135
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oqMpCf_Ccecd9lPcyzSRT4
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q4qRU6HptEz88Z1o2riodA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_41HvCHtsZdgwXGRgiY7lqE
          claim_id: c_oqMpCf_Ccecd9lPcyzSRT4
          source_id: s_4mh9LC6-Nx2e4x-AgSXpS3
          stance: supports
          locator: CBDB：兄弟 王芳（202288）之父／母 王伯載
          quotation: null
          interpretation_note: 由兄弟关系推断：王英 与 王芳 为同胞（CBDB 记「兄」），王芳 之父／母即 王英 之父／母。
          source:
            id: s_4mh9LC6-Nx2e4x-AgSXpS3
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 286135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286135&o=json
            external_identifier: CBDB:286135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1VVqD7EPGnVHF4wrhTw5JU
        status: active
        display_name: 王伯載
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gbSdZqfVjhrpmxgtHRtyzi
        subject_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Q4qRU6HptEz88Z1o2riodA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TwH0E8KexC8W4YqEoaLaEl
          claim_id: c_gbSdZqfVjhrpmxgtHRtyzi
          source_id: s_4mh9LC6-Nx2e4x-AgSXpS3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202288 王芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4mh9LC6-Nx2e4x-AgSXpS3
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 286135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286135&o=json
            external_identifier: CBDB:286135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AEPDTFs3e2Ci1GpeDM9fLo
        status: active
        display_name: 王芳
        merged_into_person_id: null
---

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| bio.summary | 王英，明人物。正德十六年進士，籍贯石首。（中国历代人物传记资料库 CBDB 286135） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1VVqD7EPGnVHF4wrhTw5JU | 王伯載 | accepted |
| other | p_AEPDTFs3e2Ci1GpeDM9fLo | 王芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王英（CBDB 286135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286135&o=json)
