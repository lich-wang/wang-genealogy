---
schema: wang-person/v1
id: p_HxBizE9NWB7384sKGrZFR3
status: active
merged_into: null
display_name: 邓氏
cbdb_id: 222489
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CLv6Hjvuaq5XDxEEjgqG13
        subject_person_id: p_HxBizE9NWB7384sKGrZFR3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 邓氏，王士琦妻。维基数据以独立条目 Q65825631 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XoQuclBv_xXpXvvBqBirBv
          claim_id: c_CLv6Hjvuaq5XDxEEjgqG13
          source_id: s_BWyWrEG9EW9dfBV6GBqBFo
          stance: supports
          locator: Q65825631
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_BWyWrEG9EW9dfBV6GBqBFo
            source_type: api_record
            title: 维基数据：邓氏（Q65825631）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65825631
            external_identifier: Q65825631
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:06.712Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5VJArNfiG9M8o3RLdk4VPu
        subject_person_id: p_HxBizE9NWB7384sKGrZFR3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 邓氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2iBoGgrY4f5R5ariE4WqFD
          claim_id: c_5VJArNfiG9M8o3RLdk4VPu
          source_id: s_Pqh3YA2r5Q21X53RdCpX51
          stance: supports
          locator: Q65825631
          quotation: null
          interpretation_note: null
          source:
            id: s_Pqh3YA2r5Q21X53RdCpX51
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：鄧氏（222489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222489&o=json
            external_identifier: CBDB:222489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:06.874Z
            metadata_json: null
        - id: cs_hSDEad5CL2yYdUnm39vtDL
          claim_id: c_5VJArNfiG9M8o3RLdk4VPu
          source_id: s_BWyWrEG9EW9dfBV6GBqBFo
          stance: supports
          locator: Q65825631
          quotation: null
          interpretation_note: null
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
        id: c_rLAa1SSdWUUix3jCwS2dJb
        subject_person_id: p_D6wSSzErFedvXoDGGx8HqR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HxBizE9NWB7384sKGrZFR3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_89vmqi5AgRwQ8atDnJMr4M
          claim_id: c_rLAa1SSdWUUix3jCwS2dJb
          source_id: s_3zNKYsryLirekqv5mgGbZP
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_3zNKYsryLirekqv5mgGbZP
            source_type: api_record
            title: 维基数据：王士琦（Q18235078）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18235078
            external_identifier: Q18235078
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:48.261Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E7%90%A6
        - id: cs_d62EtBu1jfBeDvLvHSjcjB
          claim_id: c_rLAa1SSdWUUix3jCwS2dJb
          source_id: s_BWyWrEG9EW9dfBV6GBqBFo
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_Mo89QaW5FWRr5CVWgpsrjM
          claim_id: c_rLAa1SSdWUUix3jCwS2dJb
          source_id: s_xEqa2QXsbS88FTgwuyDS4M
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆十一年進士登科錄:一卷
          source:
            id: s_xEqa2QXsbS88FTgwuyDS4M
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士琦（35067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35067&o=json
            external_identifier: CBDB:35067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:48.418Z
            metadata_json: null
      object_person:
        id: p_D6wSSzErFedvXoDGGx8HqR
        status: active
        display_name: 王士琦
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 邓氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 邓氏，王士琦妻。维基数据以独立条目 Q65825631 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 邓氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_D6wSSzErFedvXoDGGx8HqR | 王士琦 | accepted |

## 外部来源

- [维基数据：邓氏（Q65825631）](https://www.wikidata.org/wiki/Q65825631)
- [维基数据：王士琦（Q18235078）](https://www.wikidata.org/wiki/Q18235078)
- [CBDB 中国历代人物传记资料库：鄧氏（222489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222489&o=json)
- [CBDB 中国历代人物传记资料库：王士琦（35067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35067&o=json)
