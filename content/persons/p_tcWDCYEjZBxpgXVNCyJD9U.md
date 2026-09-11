---
schema: wang-person/v1
id: p_tcWDCYEjZBxpgXVNCyJD9U
status: active
merged_into: null
display_name: 王惟直
cbdb_id: 264034
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hr1rNYm9JUJQ1Tn6GeLj6h
        subject_person_id: p_tcWDCYEjZBxpgXVNCyJD9U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟直
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x637dPGVbYgd5t1ZntN99j
          claim_id: c_Hr1rNYm9JUJQ1Tn6GeLj6h
          source_id: s_1v9UzTC8dx9CeYK9vQYTPM
          stance: supports
          locator: Q45545302
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_1v9UzTC8dx9CeYK9vQYTPM
            source_type: api_record
            title: 维基数据：王惟直（Q45545302）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45545302
            external_identifier: Q45545302
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_SGo7mTUq32zkvk1DasPE9S
          claim_id: c_Hr1rNYm9JUJQ1Tn6GeLj6h
          source_id: s_nSykzH3QjYSxPj2t929wFe
          stance: supports
          locator: CBDB:264034
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_nSykzH3QjYSxPj2t929wFe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王惟直（264034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264034&o=json
            external_identifier: CBDB:264034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LFp5SPbRdSFQnn45M8iWiZ
        subject_person_id: p_tcWDCYEjZBxpgXVNCyJD9U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 264034
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1vCtJJB723EiL93dP4FBKv
          claim_id: c_LFp5SPbRdSFQnn45M8iWiZ
          source_id: s_1v9UzTC8dx9CeYK9vQYTPM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_hbfdQRdQ8NzbqLUdCDnore
        subject_person_id: p_tcWDCYEjZBxpgXVNCyJD9U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g1bs6h5k4Pu2preBv8KZPd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ga47EcPhadrxG7t7FQk55
          claim_id: c_hbfdQRdQ8NzbqLUdCDnore
          source_id: s_1v9UzTC8dx9CeYK9vQYTPM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ES3Z8H5v6hKo2JT61BzexF
          claim_id: c_hbfdQRdQ8NzbqLUdCDnore
          source_id: s_9dkGLEpEw7GwYQHS3ahk8F
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_9dkGLEpEw7GwYQHS3ahk8F
            source_type: api_record
            title: 维基数据：王仲智（Q45545364）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45545364
            external_identifier: Q45545364
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
      object_person:
        id: p_g1bs6h5k4Pu2preBv8KZPd
        status: active
        display_name: 王仲智
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_coMJK_CGabCn2hpm6AoWcd
        subject_person_id: p_tcWDCYEjZBxpgXVNCyJD9U
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_j4RsuRBKFYJbK5j9md2YXD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dmGOZGV6cpn9yqqI69iH9V
          claim_id: c_coMJK_CGabCn2hpm6AoWcd
          source_id: s_KwAAbYEBjQwNhkLyALJnCV
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第二十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KwAAbYEBjQwNhkLyALJnCV
            source_type: api_record
            title: 中国历代人物传记资料库：王承裕（CBDB 67772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67772&o=json
            external_identifier: CBDB:67772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_j4RsuRBKFYJbK5j9md2YXD
        status: active
        display_name: 王承裕
        merged_into_person_id: null
  other: []
---

# 王惟直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟直 | accepted |
| bio.summary | Ming dynasty person CBDB = 264034 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_g1bs6h5k4Pu2preBv8KZPd | 王仲智 | accepted |
| descendants | p_j4RsuRBKFYJbK5j9md2YXD | 王承裕 | accepted |

## 外部来源

- [维基数据：王惟直（Q45545302）](https://www.wikidata.org/wiki/Q45545302)
- [维基数据：王仲智（Q45545364）](https://www.wikidata.org/wiki/Q45545364)
- [中国历代人物传记资料库：王承裕（CBDB 67772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67772&o=json)
- [CBDB 中国历代人物传记资料库：王惟直（264034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264034&o=json)
