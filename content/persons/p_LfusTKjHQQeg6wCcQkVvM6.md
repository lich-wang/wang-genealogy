---
schema: wang-person/v1
id: p_LfusTKjHQQeg6wCcQkVvM6
status: active
merged_into: null
display_name: 王誠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wvUBA8AZ5MeX2WTQDQRdGB
        subject_person_id: p_LfusTKjHQQeg6wCcQkVvM6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UzrJW8LiYXLvZj1zLJqN2x
          claim_id: c_wvUBA8AZ5MeX2WTQDQRdGB
          source_id: s_x6sftN7S6tX1Ji7MKaxEsh
          stance: supports
          locator: CBDB:318547
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318547）
          source: &a1
            id: s_x6sftN7S6tX1Ji7MKaxEsh
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 318547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318547&o=json
            external_identifier: CBDB:318547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P6RDtUb2nakkwQiRBAgDGd
        subject_person_id: p_LfusTKjHQQeg6wCcQkVvM6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠，明人物。嘉靖三十二年進士，籍贯定州。（中国历代人物传记资料库 CBDB 318547）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BM4QQ3JzffmNoHimLgKTev
          claim_id: c_P6RDtUb2nakkwQiRBAgDGd
          source_id: s_x6sftN7S6tX1Ji7MKaxEsh
          stance: supports
          locator: CBDB:318547
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kymfdpm3OPv4HUMfHh-PRm
        subject_person_id: p_MB8Wi2HK7aBdXDCP3oVD5L
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LfusTKjHQQeg6wCcQkVvM6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cq8mPH1izNve-eUEs4xviO
          claim_id: c_kymfdpm3OPv4HUMfHh-PRm
          source_id: s_vB-wiZ1kdjTqpUXID2BXAB
          stance: supports
          locator: CBDB：兄弟 王詠（204396）之父／母 王拱極
          quotation: null
          interpretation_note: 由兄弟关系推断：王誠 与 王詠 为同胞（CBDB 记「兄」），王詠 之父／母即 王誠 之父／母。
          source:
            id: s_vB-wiZ1kdjTqpUXID2BXAB
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 318547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318547&o=json
            external_identifier: CBDB:318547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MB8Wi2HK7aBdXDCP3oVD5L
        status: active
        display_name: 王拱極
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NjrR7x70IzAXRr2WuPRiAh
        subject_person_id: p_LfusTKjHQQeg6wCcQkVvM6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Qw3e91Q9f7u3SKikYg5LD7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T_y-vIiXx6eJQMYK_S4SaV
          claim_id: c_NjrR7x70IzAXRr2WuPRiAh
          source_id: s_vB-wiZ1kdjTqpUXID2BXAB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204396 王詠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vB-wiZ1kdjTqpUXID2BXAB
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 318547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318547&o=json
            external_identifier: CBDB:318547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Qw3e91Q9f7u3SKikYg5LD7
        status: active
        display_name: 王詠
        merged_into_person_id: null
---

# 王誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誠 | accepted |
| bio.summary | 王誠，明人物。嘉靖三十二年進士，籍贯定州。（中国历代人物传记资料库 CBDB 318547） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MB8Wi2HK7aBdXDCP3oVD5L | 王拱極 | accepted |
| other | p_Qw3e91Q9f7u3SKikYg5LD7 | 王詠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誠（CBDB 318547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318547&o=json)
