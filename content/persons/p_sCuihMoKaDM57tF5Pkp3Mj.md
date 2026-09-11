---
schema: wang-person/v1
id: p_sCuihMoKaDM57tF5Pkp3Mj
status: active
merged_into: null
display_name: 王安国
cbdb_id: 34191
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HUrB3mVENvUJmX1pE7Dno1
        subject_person_id: p_sCuihMoKaDM57tF5Pkp3Mj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安国
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iqEjiFYH9kWzkD34tzf17C
          claim_id: c_HUrB3mVENvUJmX1pE7Dno1
          source_id: s_QLxc23wzNL9kEubUEkSKpi
          stance: supports
          locator: Q13688035
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_QLxc23wzNL9kEubUEkSKpi
            source_type: api_record
            title: 维基数据：王安国（Q13688035）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688035
            external_identifier: Q13688035
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E5%9C%8B_(%E9%9B%8D%E6%AD%A3%E9%80%B2%E5%A3%AB)
        - id: cs_qCjDovtVivJwpBixYyJBmW
          claim_id: c_HUrB3mVENvUJmX1pE7Dno1
          source_id: s_4HP7oL1E3uuVyegWK25BU7
          stance: supports
          locator: CBDB:34191
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_4HP7oL1E3uuVyegWK25BU7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王安國（34191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34191&o=json
            external_identifier: CBDB:34191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BxA9k1ffg1iYuetB6afvYu
        subject_person_id: p_sCuihMoKaDM57tF5Pkp3Mj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Qing dynasty politician (1694-1757; jin shi 1724)
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LFiGGu8XtQbeiBTbzLcBQs
          claim_id: c_BxA9k1ffg1iYuetB6afvYu
          source_id: s_QLxc23wzNL9kEubUEkSKpi
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
        id: c_EehF5BrPMQy1rF6zGJMBfu
        subject_person_id: p_sCuihMoKaDM57tF5Pkp3Mj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1694年
            calendar_note: 维基数据 P569 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vLdxjMp3YNY6SS9UbLFRrS
          claim_id: c_EehF5BrPMQy1rF6zGJMBfu
          source_id: s_QLxc23wzNL9kEubUEkSKpi
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
        id: c_qcjh1FoFcN5RT3JJsHCLVZ
        subject_person_id: p_sCuihMoKaDM57tF5Pkp3Mj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1757年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iuwfg6vPFs993TP4kvdpbs
          claim_id: c_qcjh1FoFcN5RT3JJsHCLVZ
          source_id: s_QLxc23wzNL9kEubUEkSKpi
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
        id: c_LcB6CvB627Es9sHbmsrIgG
        subject_person_id: p_T8M1S67yLGQ6wK16kEkxjn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sCuihMoKaDM57tF5Pkp3Mj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_emwAeC68_9WVb1r7H6IDFW
          claim_id: c_LcB6CvB627Es9sHbmsrIgG
          source_id: s_jbaZr7wHuBQKDV42HiMfYb
          stance: supports
          locator: CBDB 双向互证（子 王安國 ⇄ 父 王曾祿）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_jbaZr7wHuBQKDV42HiMfYb
            source_type: api_record
            title: 中国历代人物传记资料库：王曾祿（CBDB 34192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34192&o=json
            external_identifier: CBDB:34192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_T8M1S67yLGQ6wK16kEkxjn
        status: active
        display_name: 王曾祿
        merged_into_person_id: null
  children:
    - claim:
        id: c_kFFgV9APJ9PUr2goS8UsLq
        subject_person_id: p_sCuihMoKaDM57tF5Pkp3Mj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7ZLkhM6fzxrjvBYHUXQTJQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6EgtkhJncHEbuwPDecX7bP
          claim_id: c_kFFgV9APJ9PUr2goS8UsLq
          source_id: s_bLgFFJHnegm1L7AxEbYBqC
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_bLgFFJHnegm1L7AxEbYBqC
            source_type: api_record
            title: 维基数据：王念孙（Q697757）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q697757
            external_identifier: Q697757
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:20.290Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BF%B5%E5%AD%99
        - id: cs_azVAGNV1cdGHJGw4gJRTgE
          claim_id: c_kFFgV9APJ9PUr2goS8UsLq
          source_id: s_QLxc23wzNL9kEubUEkSKpi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_7ZLkhM6fzxrjvBYHUXQTJQ
        status: active
        display_name: 王念孙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王安国

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安国 | accepted |
| bio.summary | Qing dynasty politician (1694-1757; jin shi 1724) | accepted |
| birth.date | 1694年 | accepted |
| death.date | 1757年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_T8M1S67yLGQ6wK16kEkxjn | 王曾祿 | accepted |
| children | p_7ZLkhM6fzxrjvBYHUXQTJQ | 王念孙 | accepted |

## 外部来源

- [维基数据：王安国（Q13688035）](https://www.wikidata.org/wiki/Q13688035)
- [维基数据：王念孙（Q697757）](https://www.wikidata.org/wiki/Q697757)
- [中国历代人物传记资料库：王曾祿（CBDB 34192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34192&o=json)
- [CBDB 中国历代人物传记资料库：王安國（34191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34191&o=json)
