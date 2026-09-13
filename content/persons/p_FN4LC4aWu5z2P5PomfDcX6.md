---
schema: wang-person/v1
id: p_FN4LC4aWu5z2P5PomfDcX6
status: active
merged_into: null
display_name: 孙氏
cbdb_id: 326997
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E68uazkpooaAOxASssaHa3
        subject_person_id: p_FN4LC4aWu5z2P5PomfDcX6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孙氏，明人物。景泰二年進士。（中国历代人物传记资料库 CBDB 326997）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_F1fnczmxKX3TFS-0FjYHl2
          claim_id: c_E68uazkpooaAOxASssaHa3
          source_id: s_DJgg67U3SY4a7KqVuu4NS1
          stance: supports
          locator: CBDB:326997
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DJgg67U3SY4a7KqVuu4NS1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：孫氏（326997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326997&o=json
            external_identifier: CBDB:326997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:37.598Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uhWSfC1iJ9ZB35C2RA95Hw
        subject_person_id: p_FN4LC4aWu5z2P5PomfDcX6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孙氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dpAR2fbVPV3L7psM5J3juj
          claim_id: c_uhWSfC1iJ9ZB35C2RA95Hw
          source_id: s_inYxJdKuZEn1vsZjkdPhy7
          stance: supports
          locator: Q65853750
          quotation: null
          interpretation_note: null
          source:
            id: s_inYxJdKuZEn1vsZjkdPhy7
            source_type: api_record
            title: 维基数据：孙氏（Q65853750）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65853750
            external_identifier: Q65853750
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:37.417Z
            metadata_json: null
        - id: cs_sG33Bxg9REPUChJcE57Nek
          claim_id: c_uhWSfC1iJ9ZB35C2RA95Hw
          source_id: s_DJgg67U3SY4a7KqVuu4NS1
          stance: supports
          locator: Q65853750
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_G8G7mj4K8R5MzFJtXXKYQi
        subject_person_id: p_FN4LC4aWu5z2P5PomfDcX6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SAKZSsVXkQRnwcLYqa1oYe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CR8Cy7EgdFxtN8uve9MCmg
          claim_id: c_G8G7mj4K8R5MzFJtXXKYQi
          source_id: s_N1BjmNiqBZnQDmtFa6v8AN
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：景泰二年進士登科錄:一卷
          source:
            id: s_N1BjmNiqBZnQDmtFa6v8AN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王越（467429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467429&o=json
            external_identifier: CBDB:467429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:17.422Z
            metadata_json: null
        - id: cs_K5JSL6nds9vTsWDyiM6Je9
          claim_id: c_G8G7mj4K8R5MzFJtXXKYQi
          source_id: s_inYxJdKuZEn1vsZjkdPhy7
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_inYxJdKuZEn1vsZjkdPhy7
            source_type: api_record
            title: 维基数据：孙氏（Q65853750）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65853750
            external_identifier: Q65853750
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:37.417Z
            metadata_json: null
        - id: cs_LaTQwF4sZq59947jksP7tb
          claim_id: c_G8G7mj4K8R5MzFJtXXKYQi
          source_id: s_imCRBQa6npPiEExJxToHdt
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_imCRBQa6npPiEExJxToHdt
            source_type: api_record
            title: 维基数据：王越（Q15898715）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15898715
            external_identifier: Q15898715
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:28.301Z
            metadata_json: null
      object_person:
        id: p_SAKZSsVXkQRnwcLYqa1oYe
        status: active
        display_name: 王越
        merged_into_person_id: null
    - claim:
        id: c_6faE4pguNwo8EvgCnFQ00z
        subject_person_id: p_FN4LC4aWu5z2P5PomfDcX6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1CAD7Cg5ACndjPsTMwMUQ7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iuQK8MwuQPr1EplC8a19gB
          claim_id: c_6faE4pguNwo8EvgCnFQ00z
          source_id: s_DJgg67U3SY4a7KqVuu4NS1
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第六名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1CAD7Cg5ACndjPsTMwMUQ7
        status: merged
        display_name: 王越
        merged_into_person_id: p_SAKZSsVXkQRnwcLYqa1oYe
  ancestors: []
  descendants: []
  other: []
---

# 孙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 孙氏，明人物。景泰二年進士。（中国历代人物传记资料库 CBDB 326997） | accepted |
| name.primary | 孙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_SAKZSsVXkQRnwcLYqa1oYe | 王越 | accepted |
| spouses | p_1CAD7Cg5ACndjPsTMwMUQ7 | 王越 | accepted |

## 外部来源

- [维基数据：孙氏（Q65853750）](https://www.wikidata.org/wiki/Q65853750)
- [维基数据：王越（Q15898715）](https://www.wikidata.org/wiki/Q15898715)
- [CBDB 中国历代人物传记资料库：孫氏（326997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326997&o=json)
- [CBDB 中国历代人物传记资料库：王越（467429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467429&o=json)
