---
schema: wang-person/v1
id: p_EL1xAzh69eBckvCoFLRC2M
status: active
merged_into: null
display_name: 王紀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_akfjdNZPG8TQskorc9N2hH
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
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
        - id: cs_oCXkHKp9zk2Ake5EiHeaMN
          claim_id: c_akfjdNZPG8TQskorc9N2hH
          source_id: s_rthLjWyt6aPyKHFsejFoGT
          stance: supports
          locator: CBDB:304149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304149）
          source: &a1
            id: s_rthLjWyt6aPyKHFsejFoGT
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 304149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304149&o=json
            external_identifier: CBDB:304149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wgfSUbw4MAg2DN25i6Hcb5
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
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
        - id: cs_UCvwshttpXTWuRwwByGzvW
          claim_id: c_wgfSUbw4MAg2DN25i6Hcb5
          source_id: s_rthLjWyt6aPyKHFsejFoGT
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
        id: c_fAIMBC1grvzG0gatA6XXbn
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZRk4tkubFIvKPn23O0HmtZ
          claim_id: c_fAIMBC1grvzG0gatA6XXbn
          source_id: s_rthLjWyt6aPyKHFsejFoGT
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百零六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V5Z6bC9P1YiqepVeP78NQA
        status: active
        display_name: 王惟中
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
| children | p_V5Z6bC9P1YiqepVeP78NQA | 王惟中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 304149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304149&o=json)
