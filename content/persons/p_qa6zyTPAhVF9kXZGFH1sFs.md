---
schema: wang-person/v1
id: p_qa6zyTPAhVF9kXZGFH1sFs
status: active
merged_into: null
display_name: 王言
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hFiravN5RG51w8aQYDA9rv
        subject_person_id: p_qa6zyTPAhVF9kXZGFH1sFs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qwovFkqNqugJnA8j29SA9h
          claim_id: c_hFiravN5RG51w8aQYDA9rv
          source_id: s_VPcLLRefUUEFco2evQoAKq
          stance: supports
          locator: CBDB:301987
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301987）
          source: &a1
            id: s_VPcLLRefUUEFco2evQoAKq
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 301987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301987&o=json
            external_identifier: CBDB:301987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oNDunTnK9CcgRChanGT242
        subject_person_id: p_qa6zyTPAhVF9kXZGFH1sFs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言，明人物。嘉靖十七年進士，籍贯定海。（中国历代人物传记资料库 CBDB 301987）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KCuWcXUFi3oH6ibnfeEjTY
          claim_id: c_oNDunTnK9CcgRChanGT242
          source_id: s_VPcLLRefUUEFco2evQoAKq
          stance: supports
          locator: CBDB:301987
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WYJT9KD-W_SEf_E8hBQzLx
        subject_person_id: p_7HAN6MZgrNF637x89HuFkG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qa6zyTPAhVF9kXZGFH1sFs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rZETDyYPd7QgWcEkhPtr6B
          claim_id: c_WYJT9KD-W_SEf_E8hBQzLx
          source_id: s_KCzO3E6roVit1wWcezF94h
          stance: supports
          locator: CBDB：兄弟 王心（203250）之父／母 王浩
          quotation: null
          interpretation_note: 由兄弟关系推断：王言 与 王心 为同胞（CBDB 记「弟」），王心 之父／母即 王言 之父／母。
          source:
            id: s_KCzO3E6roVit1wWcezF94h
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 301987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301987&o=json
            external_identifier: CBDB:301987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7HAN6MZgrNF637x89HuFkG
        status: active
        display_name: 王浩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kooZdAoVBElONbsqQirgRg
        subject_person_id: p_GQ1GXZbABMzPSWjdERZQAa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qa6zyTPAhVF9kXZGFH1sFs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IkKNIgQdWT06Y3kQwYSvMp
          claim_id: c_kooZdAoVBElONbsqQirgRg
          source_id: s_KCzO3E6roVit1wWcezF94h
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203250 王心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KCzO3E6roVit1wWcezF94h
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 301987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301987&o=json
            external_identifier: CBDB:301987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GQ1GXZbABMzPSWjdERZQAa
        status: active
        display_name: 王心
        merged_into_person_id: null
---

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | 王言，明人物。嘉靖十七年進士，籍贯定海。（中国历代人物传记资料库 CBDB 301987） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7HAN6MZgrNF637x89HuFkG | 王浩 | accepted |
| other | p_GQ1GXZbABMzPSWjdERZQAa | 王心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王言（CBDB 301987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301987&o=json)
