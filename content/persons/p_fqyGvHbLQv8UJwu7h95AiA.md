---
schema: wang-person/v1
id: p_fqyGvHbLQv8UJwu7h95AiA
status: active
merged_into: null
display_name: 王運新
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cEqp4KReJK82MNaeuEwcHh
        subject_person_id: p_fqyGvHbLQv8UJwu7h95AiA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F897MdoFbxaAg3e2L3NBhb
          claim_id: c_cEqp4KReJK82MNaeuEwcHh
          source_id: s_xvGi3GBVG4hNwXfpH7VnhK
          stance: supports
          locator: CBDB:234431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（234431）
          source: &a1
            id: s_xvGi3GBVG4hNwXfpH7VnhK
            source_type: api_record
            title: 中国历代人物传记资料库：王運新（CBDB 234431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234431&o=json
            external_identifier: CBDB:234431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.745Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fRQd2i282AJscXyfDkCvfv
        subject_person_id: p_fqyGvHbLQv8UJwu7h95AiA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運新，明人物。籍贯汶上，入仕庠生。（中国历代人物传记资料库 CBDB 234431）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ls18N7yk03uv2xpU8nVnP4
          claim_id: c_fRQd2i282AJscXyfDkCvfv
          source_id: s_xvGi3GBVG4hNwXfpH7VnhK
          stance: supports
          locator: CBDB:234431
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jufJgZ1CAtcsh_R29y4Nio
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fqyGvHbLQv8UJwu7h95AiA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6G3eVdmCLNsSPQrlhzRYRH
          claim_id: c_jufJgZ1CAtcsh_R29y4Nio
          source_id: s_cyheDKQt-BmQp-ITL09Bbh
          stance: supports
          locator: CBDB：兄弟 王命新（207714）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王運新 与 王命新 为同胞（CBDB 记「兄」），王命新 之父／母即 王運新 之父／母。
          source:
            id: s_cyheDKQt-BmQp-ITL09Bbh
            source_type: api_record
            title: 中国历代人物传记资料库：王運新（CBDB 234431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234431&o=json
            external_identifier: CBDB:234431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RBDo1mCVNx525KP3Mg5Mqx
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_uLL-BP8NeWuI6shKOuGQR9
        subject_person_id: p_KesiNQLM6qJRi25qiHTy12
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fqyGvHbLQv8UJwu7h95AiA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Jfm-MoYPaOFqt1yVHyGMa
          claim_id: c_uLL-BP8NeWuI6shKOuGQR9
          source_id: s_cyheDKQt-BmQp-ITL09Bbh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207714 王命新）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cyheDKQt-BmQp-ITL09Bbh
            source_type: api_record
            title: 中国历代人物传记资料库：王運新（CBDB 234431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234431&o=json
            external_identifier: CBDB:234431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KesiNQLM6qJRi25qiHTy12
        status: active
        display_name: 王命新
        merged_into_person_id: null
---

# 王運新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王運新 | accepted |
| bio.summary | 王運新，明人物。籍贯汶上，入仕庠生。（中国历代人物传记资料库 CBDB 234431） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RBDo1mCVNx525KP3Mg5Mqx | 王鉞 | accepted |
| other | p_KesiNQLM6qJRi25qiHTy12 | 王命新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王運新（CBDB 234431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234431&o=json)
