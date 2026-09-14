---
schema: wang-person/v1
id: p_4YXKWy6SMNaEJM1R3UmhPJ
status: active
merged_into: null
display_name: 王納言
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eSCjvktbrkC4JqWyRBmU41
        subject_person_id: p_4YXKWy6SMNaEJM1R3UmhPJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CAsMucZoxLj7UFDZ2CEqQc
          claim_id: c_eSCjvktbrkC4JqWyRBmU41
          source_id: s_Lf5QiVTmvNqHxgK54z9cQd
          stance: supports
          locator: CBDB:314799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314799）
          source: &a1
            id: s_Lf5QiVTmvNqHxgK54z9cQd
            source_type: api_record
            title: 中国历代人物传记资料库：王納言（CBDB 314799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314799&o=json
            external_identifier: CBDB:314799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cEUAGAPBnbPQccaDubMJwD
        subject_person_id: p_4YXKWy6SMNaEJM1R3UmhPJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納言，明人物。嘉靖二十九年進士，籍贯融縣，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 314799）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UiknkMGdEFcW7ltNQF8bH1
          claim_id: c_cEUAGAPBnbPQccaDubMJwD
          source_id: s_Lf5QiVTmvNqHxgK54z9cQd
          stance: supports
          locator: CBDB:314799
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ml5fKw5JYXEhW9jg5dq9rv
        subject_person_id: p_CsFdH8PxFCRt2fMScjK1Yr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4YXKWy6SMNaEJM1R3UmhPJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xiVqnI9ABXW3CSsF4WPia1
          claim_id: c_ml5fKw5JYXEhW9jg5dq9rv
          source_id: s_ecJlww7cxlIb8gxfM5lkzo
          stance: supports
          locator: CBDB：兄弟 王納講（204128）之父／母 王儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王納言 与 王納講 为同胞（CBDB 记「弟」），王納講 之父／母即 王納言 之父／母。
          source:
            id: s_ecJlww7cxlIb8gxfM5lkzo
            source_type: api_record
            title: 中国历代人物传记资料库：王納言（CBDB 314799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314799&o=json
            external_identifier: CBDB:314799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CsFdH8PxFCRt2fMScjK1Yr
        status: active
        display_name: 王儒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_woCLtUJL8rx3vZgXAPDIBp
        subject_person_id: p_4YXKWy6SMNaEJM1R3UmhPJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nuBK1wsMvCBFXuA1nKxaa5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_npV2x3bt9Ee72bpnfZYs5T
          claim_id: c_woCLtUJL8rx3vZgXAPDIBp
          source_id: s_ecJlww7cxlIb8gxfM5lkzo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204128 王納講）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ecJlww7cxlIb8gxfM5lkzo
            source_type: api_record
            title: 中国历代人物传记资料库：王納言（CBDB 314799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314799&o=json
            external_identifier: CBDB:314799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nuBK1wsMvCBFXuA1nKxaa5
        status: active
        display_name: 王納講
        merged_into_person_id: null
---

# 王納言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王納言 | accepted |
| bio.summary | 王納言，明人物。嘉靖二十九年進士，籍贯融縣，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 314799） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CsFdH8PxFCRt2fMScjK1Yr | 王儒 | accepted |
| other | p_nuBK1wsMvCBFXuA1nKxaa5 | 王納講 | accepted |

## 外部来源

- [中国历代人物传记资料库：王納言（CBDB 314799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314799&o=json)
