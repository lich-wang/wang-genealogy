---
schema: wang-person/v1
id: p_iE2US3dJj1aLU6791NixD9
status: active
merged_into: null
display_name: 王績
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VVcx4ya7nNe6QPFHgXB7W6
        subject_person_id: p_iE2US3dJj1aLU6791NixD9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EjmNWGBR7F8JjiLyP3A1XC
          claim_id: c_VVcx4ya7nNe6QPFHgXB7W6
          source_id: s_Yr3qzYyLfGSgfR4p96Trg1
          stance: supports
          locator: CBDB:264720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264720）
          source: &a1
            id: s_Yr3qzYyLfGSgfR4p96Trg1
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 264720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264720&o=json
            external_identifier: CBDB:264720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.665Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vGQVFDkA3KZXZz7o49ncQ1
        subject_person_id: p_iE2US3dJj1aLU6791NixD9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績，明人物。弘治六年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 264720）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D4iH75Q1vAz2UFOVhVO-PB
          claim_id: c_vGQVFDkA3KZXZz7o49ncQ1
          source_id: s_Yr3qzYyLfGSgfR4p96Trg1
          stance: supports
          locator: CBDB:264720
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c9S354asT4Mqw89kZGgzv8
        subject_person_id: p_uDFyS67KkM247fUDTDP1d8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iE2US3dJj1aLU6791NixD9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OajGBBhgh5jtSuUIgDR0ao
          claim_id: c_c9S354asT4Mqw89kZGgzv8
          source_id: s_g7u6vRf2qCQdzZ-AimS7nA
          stance: supports
          locator: CBDB：兄弟 王純（126658）之父／母 王琯
          quotation: null
          interpretation_note: 由兄弟关系推断：王績 与 王純 为同胞（CBDB 记「兄」），王純 之父／母即 王績 之父／母。
          source:
            id: s_g7u6vRf2qCQdzZ-AimS7nA
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 264720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264720&o=json
            external_identifier: CBDB:264720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uDFyS67KkM247fUDTDP1d8
        status: active
        display_name: 王琯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_VQ41ooUQpyu5VWhBsaMYNq
        subject_person_id: p_iE2US3dJj1aLU6791NixD9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yt7BTSHcHKsWozExAQWe78
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y2FXfEsgkDIME5v_A9Q4LX
          claim_id: c_VQ41ooUQpyu5VWhBsaMYNq
          source_id: s_g7u6vRf2qCQdzZ-AimS7nA
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126658 王純）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_g7u6vRf2qCQdzZ-AimS7nA
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 264720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264720&o=json
            external_identifier: CBDB:264720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yt7BTSHcHKsWozExAQWe78
        status: active
        display_name: 王純
        merged_into_person_id: null
---

# 王績

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王績 | accepted |
| bio.summary | 王績，明人物。弘治六年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 264720） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uDFyS67KkM247fUDTDP1d8 | 王琯 | accepted |
| other | p_yt7BTSHcHKsWozExAQWe78 | 王純 | accepted |

## 外部来源

- [中国历代人物传记资料库：王績（CBDB 264720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264720&o=json)
