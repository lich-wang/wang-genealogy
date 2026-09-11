---
schema: wang-person/v1
id: p_2291wQtdmQ7Zm9XFAFRYrX
status: active
merged_into: null
display_name: 王慕貞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5hLF2ZqtPp726KgBEDmQg7
        subject_person_id: p_2291wQtdmQ7Zm9XFAFRYrX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慕貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1F2XPaXaGzRDLUygp2wqW1
          claim_id: c_5hLF2ZqtPp726KgBEDmQg7
          source_id: s_EQocwjgH1UHCq4KxdtakeM
          stance: supports
          locator: CBDB:276292
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276292）
          source: &a1
            id: s_EQocwjgH1UHCq4KxdtakeM
            source_type: api_record
            title: 中国历代人物传记资料库：王慕貞（CBDB 276292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276292&o=json
            external_identifier: CBDB:276292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.938Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qhUaph6ZLCLA4yjjCmzF6F
        subject_person_id: p_2291wQtdmQ7Zm9XFAFRYrX
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
        - id: cs_WY5hHu2CM58CdDtNbc2ime
          claim_id: c_qhUaph6ZLCLA4yjjCmzF6F
          source_id: s_EQocwjgH1UHCq4KxdtakeM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_tRz9QndBiC4QTo9YJqMdIo
        subject_person_id: p_2291wQtdmQ7Zm9XFAFRYrX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wnCBG8yAsATvdbYd2Y3fEu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RWTQRWUXZmtPprvURm5TUO
          claim_id: c_tRz9QndBiC4QTo9YJqMdIo
          source_id: s_9F11UKyiaVPrbEvrIn7ARt
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294155：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9F11UKyiaVPrbEvrIn7ARt
            source_type: api_record
            title: 中国历代人物传记资料库：徐昂（CBDB 276291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276291&o=json
            external_identifier: CBDB:276291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wnCBG8yAsATvdbYd2Y3fEu
        status: active
        display_name: 徐昂
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王慕貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慕貞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_wnCBG8yAsATvdbYd2Y3fEu | 徐昂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慕貞（CBDB 276292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276292&o=json)
- [中国历代人物传记资料库：徐昂（CBDB 276291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276291&o=json)
