---
schema: wang-person/v1
id: p_MRxE4eWth2oa1n5HHCdezL
status: active
merged_into: null
display_name: 王良騢
cbdb_id: 210738
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WsU6whvJJ6HeActECaS4XU
        subject_person_id: p_MRxE4eWth2oa1n5HHCdezL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良騢，明人物。隆慶五年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 210738）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ptFU_dp3VVV34sy1Ps_M9b
          claim_id: c_WsU6whvJJ6HeActECaS4XU
          source_id: s_7DEwK66BuZs6Mj4xgA3gWg
          stance: supports
          locator: CBDB:210738
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7DEwK66BuZs6Mj4xgA3gWg
            source_type: api_record
            title: 中国历代人物传记资料库：王良騢（CBDB 210738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210738&o=json
            external_identifier: CBDB:210738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cKZ43tdAKk48z9Dz9iopDa
        subject_person_id: p_MRxE4eWth2oa1n5HHCdezL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良騢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Q8EJE4xV6rj2PSDC4doEMr
          claim_id: c_cKZ43tdAKk48z9Dz9iopDa
          source_id: s_7DEwK66BuZs6Mj4xgA3gWg
          stance: supports
          locator: CBDB:210738
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qmg3R9He81yqbLqDvkI9A-
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MRxE4eWth2oa1n5HHCdezL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yWNIuAkwa82BydeRPC6e_B
          claim_id: c_qmg3R9He81yqbLqDvkI9A-
          source_id: s_w59bExEfHBYD6zz2036Mh6
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王良騢 与 王良心 为同胞（CBDB 记「兄」），王良心 之父／母即 王良騢 之父／母。
          source:
            id: s_w59bExEfHBYD6zz2036Mh6
            source_type: api_record
            title: 中国历代人物传记资料库：王良騢（CBDB 210738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210738&o=json
            external_identifier: CBDB:210738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dXbTkC8fTHTjd8NRUY9aDL
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PcO0PLTKehZIc8I2numdrT
        subject_person_id: p_MRxE4eWth2oa1n5HHCdezL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vm_cHDNA_pSzSB_dM3JqkW
          claim_id: c_PcO0PLTKehZIc8I2numdrT
          source_id: s_w59bExEfHBYD6zz2036Mh6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_w59bExEfHBYD6zz2036Mh6
            source_type: api_record
            title: 中国历代人物传记资料库：王良騢（CBDB 210738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210738&o=json
            external_identifier: CBDB:210738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sAZUvMC7u8bMFh2JrU8PMj
        status: active
        display_name: 王良心
        merged_into_person_id: null
---

# 王良騢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良騢，明人物。隆慶五年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 210738） | accepted |
| name.primary | 王良騢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dXbTkC8fTHTjd8NRUY9aDL | 王弼 | accepted |
| other | p_sAZUvMC7u8bMFh2JrU8PMj | 王良心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良騢（CBDB 210738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210738&o=json)
