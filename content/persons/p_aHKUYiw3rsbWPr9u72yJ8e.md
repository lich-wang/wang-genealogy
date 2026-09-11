---
schema: wang-person/v1
id: p_aHKUYiw3rsbWPr9u72yJ8e
status: active
merged_into: null
display_name: 王子良
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YtbbVhnUhhzkXo7G8DEcpC
        subject_person_id: p_aHKUYiw3rsbWPr9u72yJ8e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VBWCm2RiPysu1jQcyC11gE
          claim_id: c_YtbbVhnUhhzkXo7G8DEcpC
          source_id: s_DQPF7WM48avUuEA9cDuJn8
          stance: supports
          locator: CBDB:56522
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56522）
          source: &a1
            id: s_DQPF7WM48avUuEA9cDuJn8
            source_type: api_record
            title: 中国历代人物传记资料库：王子良（CBDB 56522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56522&o=json
            external_identifier: CBDB:56522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TTKNJH4FmFF9gjjNTRGpun
        subject_person_id: p_aHKUYiw3rsbWPr9u72yJ8e
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
        - id: cs_Un9suJtMVasd1CeF3t7Aht
          claim_id: c_TTKNJH4FmFF9gjjNTRGpun
          source_id: s_DQPF7WM48avUuEA9cDuJn8
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
        id: c_RQsCzvYLc1vO28QUKEbSTG
        subject_person_id: p_aHKUYiw3rsbWPr9u72yJ8e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qkNnYiEjRSCTSFvoBppi9W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YwplBOO1degR6j06ZpE9Ma
          claim_id: c_RQsCzvYLc1vO28QUKEbSTG
          source_id: s_Q2Pz9ftzAJRc69LqaYhBVL
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3578, HuWenKai #245：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q2Pz9ftzAJRc69LqaYhBVL
            source_type: api_record
            title: 中国历代人物传记资料库：王瑗（CBDB 120614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120614&o=json
            external_identifier: CBDB:120614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qkNnYiEjRSCTSFvoBppi9W
        status: active
        display_name: 王瑗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子良 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qkNnYiEjRSCTSFvoBppi9W | 王瑗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑗（CBDB 120614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120614&o=json)
- [中国历代人物传记资料库：王子良（CBDB 56522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56522&o=json)
