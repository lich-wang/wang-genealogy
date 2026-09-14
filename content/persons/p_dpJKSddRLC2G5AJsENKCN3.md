---
schema: wang-person/v1
id: p_dpJKSddRLC2G5AJsENKCN3
status: active
merged_into: null
display_name: 王國賢
cbdb_id: 213999
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WJYNnjGypAT6JQRhQtzEms
        subject_person_id: p_dpJKSddRLC2G5AJsENKCN3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國賢，明人物。萬曆二年進士，籍贯無錫，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任典史、訓導。（中国历代人物传记资料库 CBDB 213999）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_XV28gqy4ey9g6lXVvkQ9_h
          claim_id: c_WJYNnjGypAT6JQRhQtzEms
          source_id: s_52Xsq73D3LzaSqDRLRr4FC
          stance: supports
          locator: CBDB:213999
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_52Xsq73D3LzaSqDRLRr4FC
            source_type: api_record
            title: 中国历代人物传记资料库：王國賢（CBDB 213999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213999&o=json
            external_identifier: CBDB:213999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7gDDMcGX7GNLKHYNxvGAFz
        subject_person_id: p_dpJKSddRLC2G5AJsENKCN3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BoEcXh6GteaMoEMz7R3X2a
          claim_id: c_7gDDMcGX7GNLKHYNxvGAFz
          source_id: s_52Xsq73D3LzaSqDRLRr4FC
          stance: supports
          locator: CBDB:213999
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CyYr2YqBB_rJRrx3Gcin5B
        subject_person_id: p_HY2YuL547Kh5aqzUsBs5ED
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dpJKSddRLC2G5AJsENKCN3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SjYTE89JymH3rgM6EaX4w9
          claim_id: c_CyYr2YqBB_rJRrx3Gcin5B
          source_id: s___qIW_xkOq6Wi_OPpaYYcf
          stance: supports
          locator: CBDB：兄弟 王國賓（206149）之父／母 王應奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王國賢 与 王國賓 为同胞（CBDB 记「弟」），王國賓 之父／母即 王國賢 之父／母。
          source:
            id: s___qIW_xkOq6Wi_OPpaYYcf
            source_type: api_record
            title: 中国历代人物传记资料库：王國賢（CBDB 213999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213999&o=json
            external_identifier: CBDB:213999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HY2YuL547Kh5aqzUsBs5ED
        status: active
        display_name: 王應奎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_B6ySBXBlAIP4tyrqARU7Xz
        subject_person_id: p_dpJKSddRLC2G5AJsENKCN3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXDRfETnLuW3oEE7nvKJYF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gM0v4ZHPLA3ZemBXrgsymi
          claim_id: c_B6ySBXBlAIP4tyrqARU7Xz
          source_id: s___qIW_xkOq6Wi_OPpaYYcf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206149 王國賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s___qIW_xkOq6Wi_OPpaYYcf
            source_type: api_record
            title: 中国历代人物传记资料库：王國賢（CBDB 213999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213999&o=json
            external_identifier: CBDB:213999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oXDRfETnLuW3oEE7nvKJYF
        status: active
        display_name: 王國賓
        merged_into_person_id: null
---

# 王國賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王國賢，明人物。萬曆二年進士，籍贯無錫，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任典史、訓導。（中国历代人物传记资料库 CBDB 213999） | accepted |
| name.primary | 王國賢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HY2YuL547Kh5aqzUsBs5ED | 王應奎 | accepted |
| other | p_oXDRfETnLuW3oEE7nvKJYF | 王國賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國賢（CBDB 213999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213999&o=json)
