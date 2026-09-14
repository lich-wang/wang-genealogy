---
schema: wang-person/v1
id: p_mgL569hmDTkz44QU95GEhJ
status: active
merged_into: null
display_name: 王懷敏
cbdb_id: 21978
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SKEUMCNNHELZvuPgcqugy6
        subject_person_id: p_mgL569hmDTkz44QU95GEhJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷敏，宋人物。籍贯開封，入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 21978）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_kQZ3LoBRbEsEfvWyCzK00O
          claim_id: c_SKEUMCNNHELZvuPgcqugy6
          source_id: s_Do33hLGknKnF3Z8SmcXFVw
          stance: supports
          locator: CBDB:21978
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Do33hLGknKnF3Z8SmcXFVw
            source_type: api_record
            title: 中国历代人物传记资料库：王懷敏（CBDB 21978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21978&o=json
            external_identifier: CBDB:21978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AKXL39k5ZCnDaV5Ab81EkH
        subject_person_id: p_mgL569hmDTkz44QU95GEhJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9zfdHhR8MMpbdgyAwxrdR1
          claim_id: c_AKXL39k5ZCnDaV5Ab81EkH
          source_id: s_Do33hLGknKnF3Z8SmcXFVw
          stance: supports
          locator: CBDB:21978
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zG0V004TL41pVDIx0JdT-R
        subject_person_id: p_CvEsXMQ6J7PST7ecUX2ULA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mgL569hmDTkz44QU95GEhJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4fI6yxqSDdJVSLlNYMDA0i
          claim_id: c_zG0V004TL41pVDIx0JdT-R
          source_id: s_p2J1E_lP668W33dMr6Ktsp
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1779）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_p2J1E_lP668W33dMr6Ktsp
            source_type: api_record
            title: 中国历代人物传记资料库：王懷敏（CBDB 21978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21978&o=json
            external_identifier: CBDB:21978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CvEsXMQ6J7PST7ecUX2ULA
        status: active
        display_name: 王繼忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懷敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王懷敏，宋人物。籍贯開封，入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 21978） | accepted |
| name.primary | 王懷敏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CvEsXMQ6J7PST7ecUX2ULA | 王繼忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷敏（CBDB 21978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21978&o=json)
