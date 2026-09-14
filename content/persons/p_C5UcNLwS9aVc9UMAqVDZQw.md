---
schema: wang-person/v1
id: p_C5UcNLwS9aVc9UMAqVDZQw
status: active
merged_into: null
display_name: 王長銳
cbdb_id: 22018
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rdPuaw8EhrbvA9fR7vadES
        subject_person_id: p_C5UcNLwS9aVc9UMAqVDZQw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長銳，宋人物。籍贯旭川，身份为義軍首領。（中国历代人物传记资料库 CBDB 22018）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tUQyxueqpKgeznSAljqYVM
          claim_id: c_rdPuaw8EhrbvA9fR7vadES
          source_id: s_sLeE6GMsh9siEEGB4J4tEd
          stance: supports
          locator: CBDB:22018
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sLeE6GMsh9siEEGB4J4tEd
            source_type: api_record
            title: 中国历代人物传记资料库：王長銳（CBDB 22018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22018&o=json
            external_identifier: CBDB:22018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EaBerpngBd8KriMeLqECHW
        subject_person_id: p_C5UcNLwS9aVc9UMAqVDZQw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1ZJsu6eJUPmsLE5fJzryv3
          claim_id: c_EaBerpngBd8KriMeLqECHW
          source_id: s_sLeE6GMsh9siEEGB4J4tEd
          stance: supports
          locator: CBDB:22018
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c910JhdKdwpDArMWI68x6z
        subject_person_id: p_VjWEP9VfSTPsQQmuEQw4ex
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C5UcNLwS9aVc9UMAqVDZQw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3-suRi1z4pcduyvTIhZe40
          claim_id: c_c910JhdKdwpDArMWI68x6z
          source_id: s_tk0P_Fj51otLW-WjIHCylj
          stance: supports
          locator: CBDB 亲属：父（KinPerson 22016）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_tk0P_Fj51otLW-WjIHCylj
            source_type: api_record
            title: 中国历代人物传记资料库：王長銳（CBDB 22018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22018&o=json
            external_identifier: CBDB:22018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VjWEP9VfSTPsQQmuEQw4ex
        status: active
        display_name: 王蘊舒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王長銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王長銳，宋人物。籍贯旭川，身份为義軍首領。（中国历代人物传记资料库 CBDB 22018） | accepted |
| name.primary | 王長銳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VjWEP9VfSTPsQQmuEQw4ex | 王蘊舒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王長銳（CBDB 22018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22018&o=json)
