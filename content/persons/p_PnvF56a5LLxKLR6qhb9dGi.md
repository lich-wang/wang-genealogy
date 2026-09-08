---
schema: wang-person/v1
id: p_PnvF56a5LLxKLR6qhb9dGi
status: active
merged_into: null
display_name: 王氏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YK7DUzynFbw7n911wEBgBK
        subject_person_id: p_PnvF56a5LLxKLR6qhb9dGi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d7qnTX81LV5Niaqp65QVjM
          claim_id: c_YK7DUzynFbw7n911wEBgBK
          source_id: s_rnp5Kt9dJiQ5YuPwKeCSzK
          stance: supports
          locator: Q45364057
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_rnp5Kt9dJiQ5YuPwKeCSzK
            source_type: api_record
            title: 维基数据：王氏（Q45364057）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364057
            external_identifier: Q45364057
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_PzQDWs3L667fLcdQ839QCM
          claim_id: c_YK7DUzynFbw7n911wEBgBK
          source_id: s_xC1M94cmQA49ZkUJKpe91C
          stance: supports
          locator: CBDB:5119
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_xC1M94cmQA49ZkUJKpe91C
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（5119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5119&o=json
            external_identifier: CBDB:5119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JJa3GCSWEH9748cEvhkqHS
        subject_person_id: p_PnvF56a5LLxKLR6qhb9dGi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔡挺妻
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EpJm2G2KJ1uKUpLR3Y44MR
          claim_id: c_JJa3GCSWEH9748cEvhkqHS
          source_id: s_rnp5Kt9dJiQ5YuPwKeCSzK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sFUmYkMiV71J57JkY7jLXu
        subject_person_id: p_PnvF56a5LLxKLR6qhb9dGi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1013年
            calendar_note: 维基数据 P569 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZwtU1XDAPRXinFsYQwtXkW
          claim_id: c_sFUmYkMiV71J57JkY7jLXu
          source_id: s_rnp5Kt9dJiQ5YuPwKeCSzK
          stance: supports
          locator: P569（出生日期）
          quotation: null
          interpretation_note: 维基数据 P569
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8PEz1MQ8fXGfzpKd6AWT8K
        subject_person_id: p_PnvF56a5LLxKLR6qhb9dGi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1038年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Qxr7iBGB2eeQ3K4FbKmi6
          claim_id: c_8PEz1MQ8fXGfzpKd6AWT8K
          source_id: s_rnp5Kt9dJiQ5YuPwKeCSzK
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CbtYv6u2bpKx7Rpczin2Wd
        subject_person_id: p_X1JHNSNn6VXFCTFVn6HXuA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PnvF56a5LLxKLR6qhb9dGi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xMf9a4qQJhekg1LFQ5Rqq8
          claim_id: c_CbtYv6u2bpKx7Rpczin2Wd
          source_id: s_rnp5Kt9dJiQ5YuPwKeCSzK
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_S1A6m9y8aJABihgMuX7mTN
          claim_id: c_CbtYv6u2bpKx7Rpczin2Wd
          source_id: s_GDCh7KN73yY43YCNHFB3qh
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_GDCh7KN73yY43YCNHFB3qh
            source_type: api_record
            title: 维基数据：王涣（Q45362965）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45362965
            external_identifier: Q45362965
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:12.061Z
            metadata_json: null
        - id: cs_q7nHGp5W7Haq3e8SnZfDUr
          claim_id: c_CbtYv6u2bpKx7Rpczin2Wd
          source_id: s_VfErtMxHoQqfgD66dDrBwg
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_VfErtMxHoQqfgD66dDrBwg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王渙（3957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3957&o=json
            external_identifier: CBDB:3957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:12.214Z
            metadata_json: null
      object_person:
        id: p_X1JHNSNn6VXFCTFVn6HXuA
        status: active
        display_name: 王涣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王氏 | accepted |
| bio.summary | 蔡挺妻 | accepted |
| birth.date | 1013年 | accepted |
| death.date | 1038年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_X1JHNSNn6VXFCTFVn6HXuA | 王涣 | accepted |

## 外部来源

- [维基数据：王涣（Q45362965）](https://www.wikidata.org/wiki/Q45362965)
- [维基数据：王氏（Q45364057）](https://www.wikidata.org/wiki/Q45364057)
- [CBDB 中国历代人物传记资料库：王渙（3957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3957&o=json)
- [CBDB 中国历代人物传记资料库：王氏（5119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5119&o=json)
