---
schema: wang-person/v1
id: p_aHKUYiw3rsbWPr9u72yJ8e
status: active
merged_into: null
display_name: 王子良
revision: 3
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
          text: 王子良，史料所见人物。本项目依据《中国历代人物传记资料库：王子良（CBDB 56522）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Eb2Oz8pnhIKVe5sw3n62Yu
          claim_id: c_TTKNJH4FmFF9gjjNTRGpun
          source_id: s_DQPF7WM48avUuEA9cDuJn8
          stance: supports
          locator: CBDB:56522
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
  spouses:
    - claim:
        id: c_UbSbSN50jeIn15wl1fbIev
        subject_person_id: p_aHKUYiw3rsbWPr9u72yJ8e
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_e7XXcTWYNXzrX8giAJbjqj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qnpGTd1zft2WdBsJ7_GNz-
          claim_id: c_UbSbSN50jeIn15wl1fbIev
          source_id: s_p3LJSszLvyruviS1JlcXy9
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #950, HuWenKai #474：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_p3LJSszLvyruviS1JlcXy9
            source_type: api_record
            title: 中国历代人物传记资料库：徐淑（CBDB 56521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56521&o=json
            external_identifier: CBDB:56521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_e7XXcTWYNXzrX8giAJbjqj
        status: active
        display_name: 徐淑
        merged_into_person_id: null
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
| bio.summary | 王子良，史料所见人物。本项目依据《中国历代人物传记资料库：王子良（CBDB 56522）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qkNnYiEjRSCTSFvoBppi9W | 王瑗 | accepted |
| spouses | p_e7XXcTWYNXzrX8giAJbjqj | 徐淑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑗（CBDB 120614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120614&o=json)
- [中国历代人物传记资料库：王子良（CBDB 56522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56522&o=json)
- [中国历代人物传记资料库：徐淑（CBDB 56521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56521&o=json)
