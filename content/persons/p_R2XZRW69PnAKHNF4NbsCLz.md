---
schema: wang-person/v1
id: p_R2XZRW69PnAKHNF4NbsCLz
status: active
merged_into: null
display_name: 田氏
revision: 1
cbdb_id: 297733
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BdJNzh-PVGSfzRJSWVA9fH
        subject_person_id: p_R2XZRW69PnAKHNF4NbsCLz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 田氏，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 297733）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cInsV3OM7VL9cTRwYnknKs
          claim_id: c_BdJNzh-PVGSfzRJSWVA9fH
          source_id: s_hjz-jtc2QOMj1xabiHJeXy
          stance: supports
          locator: CBDB:297733
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hjz-jtc2QOMj1xabiHJeXy
            source_type: api_record
            title: 中国历代人物传记资料库：田氏(王應期妻)（CBDB 297733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297733&o=json
            external_identifier: CBDB:297733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NkaTH-SgexV2G_B_HZ5C2z
        subject_person_id: p_R2XZRW69PnAKHNF4NbsCLz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 田氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pO5AxokIEtNMzmm6EOzRja
          claim_id: c_NkaTH-SgexV2G_B_HZ5C2z
          source_id: s_hjz-jtc2QOMj1xabiHJeXy
          stance: supports
          locator: CBDB:297733
          quotation: null
          interpretation_note: CBDB 明确记录的王應期配偶
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
        id: c_8OVSENg60ASJwU-BAkE1k2
        subject_person_id: p_7wzTGA3qgQYcchPFctGbYw
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_R2XZRW69PnAKHNF4NbsCLz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Yfo5yLIRks7DD2aizLd1J
          claim_id: c_8OVSENg60ASJwU-BAkE1k2
          source_id: s_hjz-jtc2QOMj1xabiHJeXy
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百五十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7wzTGA3qgQYcchPFctGbYw
        status: active
        display_name: 王應期
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 田氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 田氏，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 297733） | accepted |
| name.primary | 田氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7wzTGA3qgQYcchPFctGbYw | 王應期 | accepted |

## 外部来源

- [中国历代人物传记资料库：田氏(王應期妻)（CBDB 297733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297733&o=json)
