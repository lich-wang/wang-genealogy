---
schema: wang-person/v1
id: p_9EmE8HnUzDNEFtwVVXAMQB
status: active
merged_into: null
display_name: 王安道
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_noCDowQkaUpb1AozJQLqgj
        subject_person_id: p_9EmE8HnUzDNEFtwVVXAMQB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3vtTQ8SRKFzEsh6Zj9rFS3
          claim_id: c_noCDowQkaUpb1AozJQLqgj
          source_id: s_BQaGAwdkqNx8YfVSS1C4GA
          stance: supports
          locator: CBDB:119742
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119742）
          source: &a1
            id: s_BQaGAwdkqNx8YfVSS1C4GA
            source_type: api_record
            title: 中国历代人物传记资料库：王安道（CBDB 119742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119742&o=json
            external_identifier: CBDB:119742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KWYD5kLAMM1jmVXzP4xjDh
        subject_person_id: p_9EmE8HnUzDNEFtwVVXAMQB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安道，南宋臨安人，佞幸王繼先之子，官至武泰軍承宣使（《宋史·卷四百七十·王繼先傳》：子安道，武泰軍承宣使）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_AGWLj0aKHQO1mbKGQCLSUt
          claim_id: c_KWYD5kLAMM1jmVXzP4xjDh
          source_id: s_X-gv7AEcUF4kEaDgqHe3wN
          stance: supports
          locator: 宋史/卷470·王安道
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_X-gv7AEcUF4kEaDgqHe3wN
            source_type: website
            title: 维基文库：宋史/卷470·王安道
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/宋史/卷470
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:19:12.294Z
            metadata_json: null
        - id: cs_Ipj-SIxJSGtCd_jPnUZD2Y
          claim_id: c_KWYD5kLAMM1jmVXzP4xjDh
          source_id: s_BQaGAwdkqNx8YfVSS1C4GA
          stance: supports
          locator: CBDB:119742
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5F9SdU2Lbn5r2ZLEl2Jcaz
        subject_person_id: p_Ca3HVLeA27vo1Jq5CxZ5ag
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9EmE8HnUzDNEFtwVVXAMQB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yOee_FFMUrpZ4RqERYUOmc
          claim_id: c_5F9SdU2Lbn5r2ZLEl2Jcaz
          source_id: s_BQaGAwdkqNx8YfVSS1C4GA
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ca3HVLeA27vo1Jq5CxZ5ag
        status: active
        display_name: 王繼先
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王安道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安道 | accepted |
| bio.summary | 王安道，南宋臨安人，佞幸王繼先之子，官至武泰軍承宣使（《宋史·卷四百七十·王繼先傳》：子安道，武泰軍承宣使）。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ca3HVLeA27vo1Jq5CxZ5ag | 王繼先 | accepted |

## 外部来源

- [维基文库：宋史/卷470·王安道](https://zh.wikisource.org/wiki/宋史/卷470)
- [中国历代人物传记资料库：王安道（CBDB 119742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119742&o=json)
