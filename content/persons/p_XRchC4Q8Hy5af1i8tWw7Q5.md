---
schema: wang-person/v1
id: p_XRchC4Q8Hy5af1i8tWw7Q5
status: active
merged_into: null
display_name: 王之輔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FL6JGDoctgRpV85AwXu7ga
        subject_person_id: p_XRchC4Q8Hy5af1i8tWw7Q5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PPkxMGrjmJjNua1PKZ8z7b
          claim_id: c_FL6JGDoctgRpV85AwXu7ga
          source_id: s_6WT5gAno7eCVQdDVPgz6A2
          stance: supports
          locator: CBDB:232523
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（232523）
          source: &a1
            id: s_6WT5gAno7eCVQdDVPgz6A2
            source_type: api_record
            title: 中国历代人物传记资料库：王之輔（CBDB 232523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232523&o=json
            external_identifier: CBDB:232523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.691Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7PRXaubRB1P8XF28iHFSYF
        subject_person_id: p_XRchC4Q8Hy5af1i8tWw7Q5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之輔，明人物。籍贯新城。（中国历代人物传记资料库 CBDB 232523）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hQ5yDdWG1W8MQ6Z5vSIKsv
          claim_id: c_7PRXaubRB1P8XF28iHFSYF
          source_id: s_6WT5gAno7eCVQdDVPgz6A2
          stance: supports
          locator: CBDB:232523
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_bB5zJLVcQfIol2NECJgVIm
        subject_person_id: p_XRchC4Q8Hy5af1i8tWw7Q5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6VHJbLTrkCw69Y2Ho1sBH7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Phc-0Z6ZgEQJEdlisijakN
          claim_id: c_bB5zJLVcQfIol2NECJgVIm
          source_id: s_6WT5gAno7eCVQdDVPgz6A2
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百九十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6VHJbLTrkCw69Y2Ho1sBH7
        status: active
        display_name: 王象节
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之輔 | accepted |
| bio.summary | 王之輔，明人物。籍贯新城。（中国历代人物传记资料库 CBDB 232523） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6VHJbLTrkCw69Y2Ho1sBH7 | 王象节 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之輔（CBDB 232523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232523&o=json)
