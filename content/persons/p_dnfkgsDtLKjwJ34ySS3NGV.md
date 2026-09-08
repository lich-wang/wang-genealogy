---
schema: wang-person/v1
id: p_dnfkgsDtLKjwJ34ySS3NGV
status: active
merged_into: null
display_name: 王士则
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xHGL24CA5gceUveV5FsENM
        subject_person_id: p_dnfkgsDtLKjwJ34ySS3NGV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士则
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wCMmXW6KWhuPFTTUHN6pAd
          claim_id: c_xHGL24CA5gceUveV5FsENM
          source_id: s_EZnZNViEzmDDooGjCB1RZR
          stance: supports
          locator: Q45630024
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_EZnZNViEzmDDooGjCB1RZR
            source_type: api_record
            title: 维基数据：王士则（Q45630024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45630024
            external_identifier: Q45630024
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E5%89%87
        - id: cs_LpTZqJCRGM8DXoAxm7vTXf
          claim_id: c_xHGL24CA5gceUveV5FsENM
          source_id: s_iM9Nk8MUETox3ohoZg8FyV
          stance: supports
          locator: CBDB:196170
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_iM9Nk8MUETox3ohoZg8FyV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士則（196170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=196170&o=json
            external_identifier: CBDB:196170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_63QUWgr5E7uFjxCiQhXgG3
        subject_person_id: p_dnfkgsDtLKjwJ34ySS3NGV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Tang dynasty person CBDB = 196170
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5GRhgGMPQraR9FeRbziKr6
          claim_id: c_63QUWgr5E7uFjxCiQhXgG3
          source_id: s_EZnZNViEzmDDooGjCB1RZR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dAMm5M6Yxw1Bya49e3j1cg
        subject_person_id: p_dnfkgsDtLKjwJ34ySS3NGV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 831年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NyZg1xGn1qu7ExCWhsHeYf
          claim_id: c_dAMm5M6Yxw1Bya49e3j1cg
          source_id: s_EZnZNViEzmDDooGjCB1RZR
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
        id: c_1it3h17o21BKNbQAwYAy5C
        subject_person_id: p_LkMtpZjg6KZsBH9aWToWD9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dnfkgsDtLKjwJ34ySS3NGV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NjbRKP95Uc2FRZtvvcCiqa
          claim_id: c_1it3h17o21BKNbQAwYAy5C
          source_id: s_c7zbsk2y4rB9uNmsVojoyp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_c7zbsk2y4rB9uNmsVojoyp
            source_type: api_record
            title: 维基数据：王武俊（Q7967676）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7967676
            external_identifier: Q7967676
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:22.442Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A6%E4%BF%8A
        - id: cs_wXkVCtcqALbYZkYFrmbw3W
          claim_id: c_1it3h17o21BKNbQAwYAy5C
          source_id: s_EZnZNViEzmDDooGjCB1RZR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_GRH6Ptwz4k1a9mjjrUfF4U
          claim_id: c_1it3h17o21BKNbQAwYAy5C
          source_id: s_mMp7PA549b87u7vum9HFuz
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_mMp7PA549b87u7vum9HFuz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王武俊（191752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191752&o=json
            external_identifier: CBDB:191752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:22.594Z
            metadata_json: null
      object_person:
        id: p_LkMtpZjg6KZsBH9aWToWD9
        status: active
        display_name: 王武俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士则

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士则 | accepted |
| bio.summary | Tang dynasty person CBDB = 196170 | accepted |
| death.date | 831年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LkMtpZjg6KZsBH9aWToWD9 | 王武俊 | accepted |

## 外部来源

- [维基数据：王士则（Q45630024）](https://www.wikidata.org/wiki/Q45630024)
- [维基数据：王武俊（Q7967676）](https://www.wikidata.org/wiki/Q7967676)
- [CBDB 中国历代人物传记资料库：王士則（196170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=196170&o=json)
- [CBDB 中国历代人物传记资料库：王武俊（191752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191752&o=json)
