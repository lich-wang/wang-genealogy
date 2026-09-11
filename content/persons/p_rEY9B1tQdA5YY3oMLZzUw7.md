---
schema: wang-person/v1
id: p_rEY9B1tQdA5YY3oMLZzUw7
status: active
merged_into: null
display_name: 王維哲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pyVp92Fqc8BdcycPpYYJVC
        subject_person_id: p_rEY9B1tQdA5YY3oMLZzUw7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JeJcdqaoJzZPeK6FvLTNNv
          claim_id: c_pyVp92Fqc8BdcycPpYYJVC
          source_id: s_saD8ZcBmzsufYEhgNeEaro
          stance: supports
          locator: CBDB:72031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72031）
          source: &a1
            id: s_saD8ZcBmzsufYEhgNeEaro
            source_type: api_record
            title: 中国历代人物传记资料库：王維哲（CBDB 72031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72031&o=json
            external_identifier: CBDB:72031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DNLQfzJx7TcXiG4bm6HrqJ
        subject_person_id: p_rEY9B1tQdA5YY3oMLZzUw7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1810年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6H1GBxavYabQM3re1yFWBA
          claim_id: c_DNLQfzJx7TcXiG4bm6HrqJ
          source_id: s_saD8ZcBmzsufYEhgNeEaro
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ovQMbQKqHYRTXNJuKnVsHa
        subject_person_id: p_rEY9B1tQdA5YY3oMLZzUw7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1873年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_24qSEPNNb1ArcqBANuP6NL
          claim_id: c_ovQMbQKqHYRTXNJuKnVsHa
          source_id: s_saD8ZcBmzsufYEhgNeEaro
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g7RSb9NpkU6TbukExAfXpe
        subject_person_id: p_rEY9B1tQdA5YY3oMLZzUw7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QjYdYN8p6Uj7kC6BGYnVkz
          claim_id: c_g7RSb9NpkU6TbukExAfXpe
          source_id: s_saD8ZcBmzsufYEhgNeEaro
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
        id: c_LEl3m81R7KodR65WZt6bOs
        subject_person_id: p_rEY9B1tQdA5YY3oMLZzUw7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_5iEZQi2CY6zZCLhNB26wYg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NV9h1OqlB_h6ozeOnpIL3C
          claim_id: c_LEl3m81R7KodR65WZt6bOs
          source_id: s_5qm359Iyvu2AcvH1JvpUtQ
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3926, HuWenKai #535：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5qm359Iyvu2AcvH1JvpUtQ
            source_type: api_record
            title: 中国历代人物传记资料库：戚繼裳（CBDB 121014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121014&o=json
            external_identifier: CBDB:121014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5iEZQi2CY6zZCLhNB26wYg
        status: active
        display_name: 戚繼裳
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王維哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維哲 | accepted |
| birth.date | 1810年 | accepted |
| death.date | 1873年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5iEZQi2CY6zZCLhNB26wYg | 戚繼裳 | accepted |

## 外部来源

- [中国历代人物传记资料库：戚繼裳（CBDB 121014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121014&o=json)
- [中国历代人物传记资料库：王維哲（CBDB 72031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72031&o=json)
