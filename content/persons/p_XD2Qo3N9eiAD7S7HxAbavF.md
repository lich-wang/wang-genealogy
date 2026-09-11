---
schema: wang-person/v1
id: p_XD2Qo3N9eiAD7S7HxAbavF
status: active
merged_into: null
display_name: 嚴氏
revision: 1
cbdb_id: 38354
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_isZxsv0jErBftw8wZUoaIP
        subject_person_id: p_XD2Qo3N9eiAD7S7HxAbavF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 嚴氏，五代人物。曾任國太夫人。（中国历代人物传记资料库 CBDB 38354）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_40tWmpsonT5DEgAxyON4iU
          claim_id: c_isZxsv0jErBftw8wZUoaIP
          source_id: s_1TED0ERp4uhwYJEst2VHqR
          stance: supports
          locator: CBDB:38354
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1TED0ERp4uhwYJEst2VHqR
            source_type: api_record
            title: 中国历代人物传记资料库：嚴氏(王延祚妻)（CBDB 38354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38354&o=json
            external_identifier: CBDB:38354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_A9UG3uoDYuCltyX0UiHVO5
        subject_person_id: p_XD2Qo3N9eiAD7S7HxAbavF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 嚴氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ucgsOq88IeJyJW-gRg9M22
          claim_id: c_A9UG3uoDYuCltyX0UiHVO5
          source_id: s_1TED0ERp4uhwYJEst2VHqR
          stance: supports
          locator: CBDB:38354
          quotation: null
          interpretation_note: CBDB 明确记录的王延祚配偶
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
        id: c_WfaFiwKg4HtVIiIBpDObVa
        subject_person_id: p_75587XqogBQaW5G74KzAUa
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_XD2Qo3N9eiAD7S7HxAbavF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YpsbYyAMey_Qk49ma03wJs
          claim_id: c_WfaFiwKg4HtVIiIBpDObVa
          source_id: s_1TED0ERp4uhwYJEst2VHqR
          stance: supports
          locator: 宋人傳記資料索引(電子版)，822;825：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_75587XqogBQaW5G74KzAUa
        status: active
        display_name: 王延祚
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 嚴氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 嚴氏，五代人物。曾任國太夫人。（中国历代人物传记资料库 CBDB 38354） | accepted |
| name.primary | 嚴氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_75587XqogBQaW5G74KzAUa | 王延祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：嚴氏(王延祚妻)（CBDB 38354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38354&o=json)
