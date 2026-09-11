---
schema: wang-person/v1
id: p_4H62vCdFCPfwbu588ZF5Rs
status: active
merged_into: null
display_name: 王紀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eCQ3xfrPxb127LKCpZSxxn
        subject_person_id: p_4H62vCdFCPfwbu588ZF5Rs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nds7TQXrPN9n91L42ddezx
          claim_id: c_eCQ3xfrPxb127LKCpZSxxn
          source_id: s_13pFUK9EhwCPb57i3vxCDB
          stance: supports
          locator: CBDB:252483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252483）
          source: &a1
            id: s_13pFUK9EhwCPb57i3vxCDB
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 252483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252483&o=json
            external_identifier: CBDB:252483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2VFYTB4hB7xrxG7GNrayQp
        subject_person_id: p_4H62vCdFCPfwbu588ZF5Rs
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
        - id: cs_DgzNWs1V9QgE4mF9NdwBnC
          claim_id: c_2VFYTB4hB7xrxG7GNrayQp
          source_id: s_13pFUK9EhwCPb57i3vxCDB
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
        id: c_s7WFXWdVwVgoeAhUatjfjl
        subject_person_id: p_4H62vCdFCPfwbu588ZF5Rs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5841EMmKzggT2c8As9ptEU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4JVd1lZv7sPhEYw45ZVENw
          claim_id: c_s7WFXWdVwVgoeAhUatjfjl
          source_id: s_13pFUK9EhwCPb57i3vxCDB
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第八十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5841EMmKzggT2c8As9ptEU
        status: active
        display_name: 王鯨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5841EMmKzggT2c8As9ptEU | 王鯨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 252483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252483&o=json)
