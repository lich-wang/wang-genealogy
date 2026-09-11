---
schema: wang-person/v1
id: p_Jj8dkQubs7taj8bUq4RoTF
status: active
merged_into: null
display_name: 王鯨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mTbsLxHDfDT9fMwfEYd1ZN
        subject_person_id: p_Jj8dkQubs7taj8bUq4RoTF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鯨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LUGs7vF6AcjUGQM7avaycy
          claim_id: c_mTbsLxHDfDT9fMwfEYd1ZN
          source_id: s_R4BD5uKkAPNYJBZ61cEuF7
          stance: supports
          locator: CBDB:276002
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276002）
          source: &a1
            id: s_R4BD5uKkAPNYJBZ61cEuF7
            source_type: api_record
            title: 中国历代人物传记资料库：王鯨（CBDB 276002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276002&o=json
            external_identifier: CBDB:276002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B99yJxndh1aL2MPCTH8ofT
        subject_person_id: p_Jj8dkQubs7taj8bUq4RoTF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鯨，明人物。正德六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 276002）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TibcOyCrsAVPq7sguaWE3y
          claim_id: c_B99yJxndh1aL2MPCTH8ofT
          source_id: s_R4BD5uKkAPNYJBZ61cEuF7
          stance: supports
          locator: CBDB:276002
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_tLgThtz5aDq1oNka9DTJ0b
        subject_person_id: p_Jj8dkQubs7taj8bUq4RoTF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HPi9LMn5Kw5811QG1EqGfq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_woKz42i7TVMPh7Es11CIXr
          claim_id: c_tLgThtz5aDq1oNka9DTJ0b
          source_id: s_R4BD5uKkAPNYJBZ61cEuF7
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第二十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HPi9LMn5Kw5811QG1EqGfq
        status: active
        display_name: 王世文
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鯨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鯨 | accepted |
| bio.summary | 王鯨，明人物。正德六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 276002） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HPi9LMn5Kw5811QG1EqGfq | 王世文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鯨（CBDB 276002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276002&o=json)
