---
schema: wang-person/v1
id: p_FVmvRZ4x9EYAHhB3dc7Zm9
status: active
merged_into: null
display_name: 王琮
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7hBEr5y4hXWMm9f5BRin4W
        subject_person_id: p_FVmvRZ4x9EYAHhB3dc7Zm9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7LM2HD7G6VBaayWxKHTbcr
          claim_id: c_7hBEr5y4hXWMm9f5BRin4W
          source_id: s_on3QBKqvaZtwchShkFLuxV
          stance: supports
          locator: CBDB:271246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271246）
          source: &a1
            id: s_on3QBKqvaZtwchShkFLuxV
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 271246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271246&o=json
            external_identifier: CBDB:271246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g9CRQcCsFnodQjttN27MBK
        subject_person_id: p_FVmvRZ4x9EYAHhB3dc7Zm9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮，明人物。弘治十五年進士，籍贯獻縣，曾任知州。（中国历代人物传记资料库 CBDB 271246）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PO4jGPI-0ViI2eIqsuflNZ
          claim_id: c_g9CRQcCsFnodQjttN27MBK
          source_id: s_on3QBKqvaZtwchShkFLuxV
          stance: supports
          locator: CBDB:271246
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8k1bHy8OFuAikysSnmmsIb
        subject_person_id: p_FVmvRZ4x9EYAHhB3dc7Zm9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U9mkTVdbhdN8j3G86uAN6S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qPFps2S3f86HHmL6WCJGYi
          claim_id: c_8k1bHy8OFuAikysSnmmsIb
          source_id: s_on3QBKqvaZtwchShkFLuxV
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第五十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_U9mkTVdbhdN8j3G86uAN6S
        status: active
        display_name: 王注
        merged_into_person_id: null
    - claim:
        id: c_PePEnPtkaQ6ShXEGXllXqh
        subject_person_id: p_FVmvRZ4x9EYAHhB3dc7Zm9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D5QBU1T346SZjwSQ9aMsRk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_akuPa2EUiNySnKVHypQDvz
          claim_id: c_PePEnPtkaQ6ShXEGXllXqh
          source_id: s_E_ky7QhIUXSnuKTjNO-JFS
          stance: supports
          locator: CBDB：兄弟 王注（201369）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王淮 与 王注 为同胞（CBDB 记「弟」），王注 之父／母即 王淮 之父／母。
          source:
            id: s_E_ky7QhIUXSnuKTjNO-JFS
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 271251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271251&o=json
            external_identifier: CBDB:271251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D5QBU1T346SZjwSQ9aMsRk
        status: active
        display_name: 王淮
        merged_into_person_id: null
    - claim:
        id: c_MST7_yaTmKMTan3Ok9yPhW
        subject_person_id: p_FVmvRZ4x9EYAHhB3dc7Zm9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YR95ZJXtrjtvLM3rMrE6zf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ieOeW3c0dCmkuA4cdX__8U
          claim_id: c_MST7_yaTmKMTan3Ok9yPhW
          source_id: s_jFPpkfTlzkW5NtGAgR5sZK
          stance: supports
          locator: CBDB：兄弟 王注（201369）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王淇 与 王注 为同胞（CBDB 记「弟」），王注 之父／母即 王淇 之父／母。
          source:
            id: s_jFPpkfTlzkW5NtGAgR5sZK
            source_type: api_record
            title: 中国历代人物传记资料库：王淇（CBDB 271250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271250&o=json
            external_identifier: CBDB:271250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YR95ZJXtrjtvLM3rMrE6zf
        status: active
        display_name: 王淇
        merged_into_person_id: null
    - claim:
        id: c_FAaWJOQrv6LYjijI3a3iX9
        subject_person_id: p_FVmvRZ4x9EYAHhB3dc7Zm9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m59gyQJfTf5HaDqCr7HFLj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3r5mCCoo5ncGIKcjDRFC2M
          claim_id: c_FAaWJOQrv6LYjijI3a3iX9
          source_id: s_ynJK-M6Pe2qStXaiJgNrjj
          stance: supports
          locator: CBDB：兄弟 王注（201369）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王澤 与 王注 为同胞（CBDB 记「弟」），王注 之父／母即 王澤 之父／母。
          source:
            id: s_ynJK-M6Pe2qStXaiJgNrjj
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 271252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271252&o=json
            external_identifier: CBDB:271252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_m59gyQJfTf5HaDqCr7HFLj
        status: active
        display_name: 王澤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| bio.summary | 王琮，明人物。弘治十五年進士，籍贯獻縣，曾任知州。（中国历代人物传记资料库 CBDB 271246） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_U9mkTVdbhdN8j3G86uAN6S | 王注 | accepted |
| children | p_D5QBU1T346SZjwSQ9aMsRk | 王淮 | accepted |
| children | p_YR95ZJXtrjtvLM3rMrE6zf | 王淇 | accepted |
| children | p_m59gyQJfTf5HaDqCr7HFLj | 王澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 271246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271246&o=json)
- [中国历代人物传记资料库：王淮（CBDB 271251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271251&o=json)
- [中国历代人物传记资料库：王淇（CBDB 271250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271250&o=json)
- [中国历代人物传记资料库：王澤（CBDB 271252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271252&o=json)
