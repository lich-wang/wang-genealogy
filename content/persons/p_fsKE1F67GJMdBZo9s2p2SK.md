---
schema: wang-person/v1
id: p_fsKE1F67GJMdBZo9s2p2SK
status: active
merged_into: null
display_name: 王俊民
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VR5jbtCyt9KUJVCnDNHmrF
        subject_person_id: p_fsKE1F67GJMdBZo9s2p2SK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sE3iMREfkBsAGWxf6M5cv5
          claim_id: c_VR5jbtCyt9KUJVCnDNHmrF
          source_id: s_a9L2BZSEwbE5ZDKBXianno
          stance: supports
          locator: CBDB:229376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229376）
          source: &a1
            id: s_a9L2BZSEwbE5ZDKBXianno
            source_type: api_record
            title: 中国历代人物传记资料库：王俊民（CBDB 229376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229376&o=json
            external_identifier: CBDB:229376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.574Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_86HPNShLvEa96nAMH6KN8f
        subject_person_id: p_fsKE1F67GJMdBZo9s2p2SK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5w5ActYscmYB4Y8fxDG2RR
          claim_id: c_86HPNShLvEa96nAMH6KN8f
          source_id: s_a9L2BZSEwbE5ZDKBXianno
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GuIoa9CsYOYOWuDrFaOHUo
        subject_person_id: p_fsKE1F67GJMdBZo9s2p2SK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p7XKo89NhBCAZto4tXob1s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZtmtabbPKpQ0EANc6v0naP
          claim_id: c_GuIoa9CsYOYOWuDrFaOHUo
          source_id: s_a9L2BZSEwbE5ZDKBXianno
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百五十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_p7XKo89NhBCAZto4tXob1s
        status: active
        display_name: 王希夔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王俊民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊民 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_p7XKo89NhBCAZto4tXob1s | 王希夔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊民（CBDB 229376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229376&o=json)
