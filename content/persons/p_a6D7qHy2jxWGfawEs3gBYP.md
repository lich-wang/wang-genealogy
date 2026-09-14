---
schema: wang-person/v1
id: p_a6D7qHy2jxWGfawEs3gBYP
status: active
merged_into: null
display_name: 王璧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YrrxYFLTYNw1sBJTBu4u7M
        subject_person_id: p_a6D7qHy2jxWGfawEs3gBYP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PqjBJuVgKCYdTF2PJTiRoq
          claim_id: c_YrrxYFLTYNw1sBJTBu4u7M
          source_id: s_cSvRQn84xMP3ZrUnt4Zgb2
          stance: supports
          locator: CBDB:297017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297017）
          source: &a1
            id: s_cSvRQn84xMP3ZrUnt4Zgb2
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 297017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297017&o=json
            external_identifier: CBDB:297017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rLeqQGcLQ7BGuKzXVApyhU
        subject_person_id: p_a6D7qHy2jxWGfawEs3gBYP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璧，明人物。嘉靖十四年進士，籍贯宜賓。（中国历代人物传记资料库 CBDB 297017）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FApeRI1awRsscj3NP9rVsl
          claim_id: c_rLeqQGcLQ7BGuKzXVApyhU
          source_id: s_cSvRQn84xMP3ZrUnt4Zgb2
          stance: supports
          locator: CBDB:297017
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Z0PwYhiPmVRYf4DRodjKny
        subject_person_id: p_a6D7qHy2jxWGfawEs3gBYP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5zhGEimBSRibG2X8DZoDuG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-gBft2Mavk9TROt9iGkg0L
          claim_id: c_Z0PwYhiPmVRYf4DRodjKny
          source_id: s_cSvRQn84xMP3ZrUnt4Zgb2
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第八十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5zhGEimBSRibG2X8DZoDuG
        status: active
        display_name: 王嘉元
        merged_into_person_id: null
    - claim:
        id: c_5FPqTnO8A-lUxG9JkW9ieD
        subject_person_id: p_a6D7qHy2jxWGfawEs3gBYP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pyTdWHXHxNi9jmFsKvH7UH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z1gMSVDH8lvgok_XRKcudE
          claim_id: c_5FPqTnO8A-lUxG9JkW9ieD
          source_id: s_LSwJNc_-akCQrTy5qhpdqU
          stance: supports
          locator: CBDB：兄弟 王嘉元（202937）之父／母 王璧
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉輅 与 王嘉元 为同胞（CBDB 记「兄」），王嘉元 之父／母即 王嘉輅 之父／母。
          source:
            id: s_LSwJNc_-akCQrTy5qhpdqU
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉輅（CBDB 297022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297022&o=json
            external_identifier: CBDB:297022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pyTdWHXHxNi9jmFsKvH7UH
        status: active
        display_name: 王嘉輅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璧 | accepted |
| bio.summary | 王璧，明人物。嘉靖十四年進士，籍贯宜賓。（中国历代人物传记资料库 CBDB 297017） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5zhGEimBSRibG2X8DZoDuG | 王嘉元 | accepted |
| children | p_pyTdWHXHxNi9jmFsKvH7UH | 王嘉輅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璧（CBDB 297017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297017&o=json)
- [中国历代人物传记资料库：王嘉輅（CBDB 297022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297022&o=json)
