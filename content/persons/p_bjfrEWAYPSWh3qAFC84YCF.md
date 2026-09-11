---
schema: wang-person/v1
id: p_bjfrEWAYPSWh3qAFC84YCF
status: active
merged_into: null
display_name: 王福順
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aHs25s4wRNE85Z4Yu4ePjU
        subject_person_id: p_bjfrEWAYPSWh3qAFC84YCF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jG6qaKo9MoHAeGMoa98enY
          claim_id: c_aHs25s4wRNE85Z4Yu4ePjU
          source_id: s_SG8gjwNt5ERS2EtZrkpzJm
          stance: supports
          locator: CBDB:332655
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332655）
          source: &a1
            id: s_SG8gjwNt5ERS2EtZrkpzJm
            source_type: api_record
            title: 中国历代人物传记资料库：王福順（CBDB 332655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332655&o=json
            external_identifier: CBDB:332655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.382Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5kKFhK5Q3kyQNcUtEjtMxN
        subject_person_id: p_bjfrEWAYPSWh3qAFC84YCF
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
        - id: cs_GZ3HnPvZ9Vw5azkMdvABoP
          claim_id: c_5kKFhK5Q3kyQNcUtEjtMxN
          source_id: s_SG8gjwNt5ERS2EtZrkpzJm
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
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Hz8D7cFUguCFEGjhzDnEI9
        subject_person_id: p_bjfrEWAYPSWh3qAFC84YCF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1ZpZ4oSkBmp5LTrwz98U1P
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JdGefEqeCrRk4bMZlCM6GG
          claim_id: c_Hz8D7cFUguCFEGjhzDnEI9
          source_id: s_NKRe2AbML1THQe9ZjP6YLj
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NKRe2AbML1THQe9ZjP6YLj
            source_type: api_record
            title: 中国历代人物传记资料库：王璒（CBDB 126824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126824&o=json
            external_identifier: CBDB:126824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.234Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1ZpZ4oSkBmp5LTrwz98U1P
        status: active
        display_name: 王璒
        merged_into_person_id: null
  other: []
---

# 王福順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福順 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_1ZpZ4oSkBmp5LTrwz98U1P | 王璒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璒（CBDB 126824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126824&o=json)
- [中国历代人物传记资料库：王福順（CBDB 332655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332655&o=json)
