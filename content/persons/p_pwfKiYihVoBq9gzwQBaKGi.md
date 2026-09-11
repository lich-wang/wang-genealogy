---
schema: wang-person/v1
id: p_pwfKiYihVoBq9gzwQBaKGi
status: active
merged_into: null
display_name: 朱氏
revision: 1
cbdb_id: 135971
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KfTpU_ga3u2lMJMVRwQUbd
        subject_person_id: p_pwfKiYihVoBq9gzwQBaKGi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sjJGlxTSIfizWVCGbyVQ-i
          claim_id: c_KfTpU_ga3u2lMJMVRwQUbd
          source_id: s_uuARxSmJ5gfqcfFvEKGcqy
          stance: supports
          locator: CBDB:135971
          quotation: null
          interpretation_note: CBDB 明确记录的王桷配偶
          source: &a1
            id: s_uuARxSmJ5gfqcfFvEKGcqy
            source_type: api_record
            title: 中国历代人物传记资料库：朱氏(王桷妻)（CBDB 135971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135971&o=json
            external_identifier: CBDB:135971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_PYqsJEmHprCZSKo88A13RZ
        subject_person_id: p_JbZbb7bSEAuQ6oSa93UNDg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_pwfKiYihVoBq9gzwQBaKGi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PMLQWRS-U0A7QwRTvSIaN8
          claim_id: c_PYqsJEmHprCZSKo88A13RZ
          source_id: s_uuARxSmJ5gfqcfFvEKGcqy
          stance: supports
          locator: 紹興十八年同年小錄，314：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JbZbb7bSEAuQ6oSa93UNDg
        status: active
        display_name: 王桷
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 朱氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 朱氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_JbZbb7bSEAuQ6oSa93UNDg | 王桷 | accepted |

## 外部来源

- [中国历代人物传记资料库：朱氏(王桷妻)（CBDB 135971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135971&o=json)
