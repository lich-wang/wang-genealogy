---
schema: wang-person/v1
id: p_3Ai1qkYjUBdtWJB4qPpmzV
status: active
merged_into: null
display_name: 王湘
cbdb_id: 22015
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JMzE43n3EPKHcXRQ94dPDe
        subject_person_id: p_3Ai1qkYjUBdtWJB4qPpmzV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湘
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3WskFP5NoZowsJDH5GSdRN
          claim_id: c_JMzE43n3EPKHcXRQ94dPDe
          source_id: s_sxwKoEhLTQLcbuwk4JJHoy
          stance: supports
          locator: Q45401685
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_sxwKoEhLTQLcbuwk4JJHoy
            source_type: api_record
            title: 维基数据：王湘（Q45401685）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401685
            external_identifier: Q45401685
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_TpaqQH74AbaKrabei94FEq
          claim_id: c_JMzE43n3EPKHcXRQ94dPDe
          source_id: s_JpcbamsCcMYPFtStQ26ppa
          stance: supports
          locator: CBDB:22015
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_JpcbamsCcMYPFtStQ26ppa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王湘（22015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22015&o=json
            external_identifier: CBDB:22015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_837yU7nF5NQpxiM9t1BpMa
        subject_person_id: p_3Ai1qkYjUBdtWJB4qPpmzV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湘（1092年—1164年），宋人物。籍贯開封府，身份为主家事，入仕恩蔭、蔭補，曾任將仕郎、修職郎、監茶。（中国历代人物传记资料库 CBDB 22015）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iQ1sLmDgmBg3sawyBa2hve
          claim_id: c_837yU7nF5NQpxiM9t1BpMa
          source_id: s_sxwKoEhLTQLcbuwk4JJHoy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_0TOzasCTRJM1Bj5SghP6H0
          claim_id: c_837yU7nF5NQpxiM9t1BpMa
          source_id: s_JpcbamsCcMYPFtStQ26ppa
          stance: supports
          locator: CBDB:22015
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_v3VVrpa1mudqudBxJ3dKKV
        subject_person_id: p_3Ai1qkYjUBdtWJB4qPpmzV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1092年
            calendar_note: 维基数据 P569 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aZJn9xduhsP6UkHW4s2YYw
          claim_id: c_v3VVrpa1mudqudBxJ3dKKV
          source_id: s_sxwKoEhLTQLcbuwk4JJHoy
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
        id: c_HVDAYYgoRQMZ1ZWwV6Js1Y
        subject_person_id: p_3Ai1qkYjUBdtWJB4qPpmzV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1164年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GpgjrR7dcHF1E7apeDtVDD
          claim_id: c_HVDAYYgoRQMZ1ZWwV6Js1Y
          source_id: s_sxwKoEhLTQLcbuwk4JJHoy
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
        id: c_HDYSobSZRq3a4EnLHsFnB5
        subject_person_id: p_t4r6xJhA7S53USBaqKsA6D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3Ai1qkYjUBdtWJB4qPpmzV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9iMM7Ard2KxCJME8mktvmX
          claim_id: c_HDYSobSZRq3a4EnLHsFnB5
          source_id: s_sxwKoEhLTQLcbuwk4JJHoy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_BVpJubESCEgv28mp9RBG5Z
          claim_id: c_HDYSobSZRq3a4EnLHsFnB5
          source_id: s_k4cG5rN2dmbJBiGcNW8Vha
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_k4cG5rN2dmbJBiGcNW8Vha
            source_type: api_record
            title: 维基数据：王敏文（Q45359594）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359594
            external_identifier: Q45359594
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:12.061Z
            metadata_json: null
        - id: cs_x6AuxLcKDJYh4Z1YwHH3V3
          claim_id: c_HDYSobSZRq3a4EnLHsFnB5
          source_id: s_Mao9w7qeps5xXr2DFfhhhc
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Mao9w7qeps5xXr2DFfhhhc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王敏文（1854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1854&o=json
            external_identifier: CBDB:1854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:12.212Z
            metadata_json: null
      object_person:
        id: p_t4r6xJhA7S53USBaqKsA6D
        status: active
        display_name: 王敏文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_alj7tdqgSkQ4fKgAv-gmFc
        subject_person_id: p_WU89T3dCoRMDk6eTHgawKb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3Ai1qkYjUBdtWJB4qPpmzV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_34eFT1mxj2vOUP1fQlHAyW
          claim_id: c_alj7tdqgSkQ4fKgAv-gmFc
          source_id: s_K58g1dFPD1BQpDPDwmjsyE
          stance: supports
          locator: 宋人傳記資料索引(電子版)，939：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K58g1dFPD1BQpDPDwmjsyE
            source_type: api_record
            title: 中国历代人物传记资料库：王拱辰（CBDB 1847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1847&o=json
            external_identifier: CBDB:1847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WU89T3dCoRMDk6eTHgawKb
        status: active
        display_name: 王拱辰
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王湘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湘 | accepted |
| bio.summary | 王湘（1092年—1164年），宋人物。籍贯開封府，身份为主家事，入仕恩蔭、蔭補，曾任將仕郎、修職郎、監茶。（中国历代人物传记资料库 CBDB 22015） | accepted |
| birth.date | 1092年 | accepted |
| death.date | 1164年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t4r6xJhA7S53USBaqKsA6D | 王敏文 | accepted |
| ancestors | p_WU89T3dCoRMDk6eTHgawKb | 王拱辰 | accepted |

## 外部来源

- [维基数据：王敏文（Q45359594）](https://www.wikidata.org/wiki/Q45359594)
- [维基数据：王湘（Q45401685）](https://www.wikidata.org/wiki/Q45401685)
- [中国历代人物传记资料库：王拱辰（CBDB 1847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1847&o=json)
- [CBDB 中国历代人物传记资料库：王敏文（1854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1854&o=json)
- [CBDB 中国历代人物传记资料库：王湘（22015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22015&o=json)
