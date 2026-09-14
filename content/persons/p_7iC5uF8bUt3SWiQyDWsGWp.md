---
schema: wang-person/v1
id: p_7iC5uF8bUt3SWiQyDWsGWp
status: active
merged_into: null
display_name: 王庭珪
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cRoxrgIGmxyvrR5M6XWXvj
        subject_person_id: p_7iC5uF8bUt3SWiQyDWsGWp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭珪（1080年—1172年），史料所见人物。本项目依据《王庭珪》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vGGaCf0o-bDi0MPsnDHYCT
          claim_id: c_cRoxrgIGmxyvrR5M6XWXvj
          source_id: s_TbEFEHXjXbhpm4ed5wft4C
          stance: supports
          locator: Q45373661
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_TbEFEHXjXbhpm4ed5wft4C
            source_type: api_record
            title: 维基数据：王庭珪（Q45373661）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45373661
            external_identifier: Q45373661
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:14.397Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6WyA5uGk6jCMXLk1oNBv7p
        subject_person_id: p_7iC5uF8bUt3SWiQyDWsGWp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1080年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1080-01-01
            latest: 1080-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cBYcb18KBxuGXrZtkFyRzS
          claim_id: c_6WyA5uGk6jCMXLk1oNBv7p
          source_id: s_TbEFEHXjXbhpm4ed5wft4C
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_TbEFEHXjXbhpm4ed5wft4C
            source_type: api_record
            title: 维基数据：王庭珪（Q45373661）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45373661
            external_identifier: Q45373661
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:14.397Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HUFoATK9vSnJrokfVD4WBg
        subject_person_id: p_7iC5uF8bUt3SWiQyDWsGWp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1172年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1172-01-01
            latest: 1172-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NNp45D5TCDX3WHhG36jMkk
          claim_id: c_HUFoATK9vSnJrokfVD4WBg
          source_id: s_TbEFEHXjXbhpm4ed5wft4C
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_TbEFEHXjXbhpm4ed5wft4C
            source_type: api_record
            title: 维基数据：王庭珪（Q45373661）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45373661
            external_identifier: Q45373661
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:14.397Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_X5RiH57UmCoNR7WhxC1ASo
        subject_person_id: p_7iC5uF8bUt3SWiQyDWsGWp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭珪
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L5L4qBABGVRnfQ3rpumnRZ
          claim_id: c_X5RiH57UmCoNR7WhxC1ASo
          source_id: s_TbEFEHXjXbhpm4ed5wft4C
          stance: supports
          locator: Q45373661
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_G2kMpDsWFjLDx8EFQiT6FZ
        subject_person_id: p_7iC5uF8bUt3SWiQyDWsGWp
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_vpfwsnKt2qCiRk9B5Gw7Pn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CJENaZ9JnxcKFKDDcpkgdr
          claim_id: c_G2kMpDsWFjLDx8EFQiT6FZ
          source_id: s_TbEFEHXjXbhpm4ed5wft4C
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_TbEFEHXjXbhpm4ed5wft4C
            source_type: api_record
            title: 维基数据：王庭珪（Q45373661）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45373661
            external_identifier: Q45373661
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:14.397Z
            metadata_json: null
        - id: cs_yCdnnVgwL4CWB7vfhqbScj
          claim_id: c_G2kMpDsWFjLDx8EFQiT6FZ
          source_id: s_3n87cdH227ZuNwizLXanCL
          stance: supports
          locator: 亲属关系：獨子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_3n87cdH227ZuNwizLXanCL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王庭珪（12158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12158&o=json
            external_identifier: CBDB:12158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:23.299Z
            metadata_json: null
        - id: cs_yoSs422HBQ3A5trxsLfHLW
          claim_id: c_G2kMpDsWFjLDx8EFQiT6FZ
          source_id: s_hsyUMupKg1YC7dPAULjhR7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hsyUMupKg1YC7dPAULjhR7
            source_type: api_record
            title: 维基数据：王𬱖（Q45373697）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45373697
            external_identifier: Q45373697
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:16.074Z
            metadata_json: null
      object_person:
        id: p_vpfwsnKt2qCiRk9B5Gw7Pn
        status: active
        display_name: 王𬱖
        merged_into_person_id: null
    - claim:
        id: c_ma8zXjILTfbw5E9fvwePzb
        subject_person_id: p_7iC5uF8bUt3SWiQyDWsGWp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e4DAa8yV3zFmoVRECMT3J6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZVHAvSu0mLyLD6V-5XR18B
          claim_id: c_ma8zXjILTfbw5E9fvwePzb
          source_id: s_WL1PYChzB4Vy4ihq1w4mr7
          stance: supports
          locator: CBDB 亲属：父（KinPerson 12158）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_WL1PYChzB4Vy4ihq1w4mr7
            source_type: api_record
            title: 中国历代人物传记资料库：王頔（CBDB 12170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12170&o=json
            external_identifier: CBDB:12170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e4DAa8yV3zFmoVRECMT3J6
        status: active
        display_name: 王頔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SZmMtRkJZXYZUNGBlOMMC4
        subject_person_id: p_7iC5uF8bUt3SWiQyDWsGWp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NKDBjDH5rA2rPZeJXPzJ9F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LTsF9hqziF8FjVG4S7fmn7
          claim_id: c_SZmMtRkJZXYZUNGBlOMMC4
          source_id: s_5GvIPbvrsoRvertuerohHj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 12158 王庭珪）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5GvIPbvrsoRvertuerohHj
            source_type: api_record
            title: 中国历代人物传记资料库：王庭珍（CBDB 12169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12169&o=json
            external_identifier: CBDB:12169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NKDBjDH5rA2rPZeJXPzJ9F
        status: active
        display_name: 王庭珍
        merged_into_person_id: null
---

# 王庭珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庭珪（1080年—1172年），史料所见人物。本项目依据《王庭珪》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1080年 | accepted |
| death.date | 1172年 | accepted |
| name.primary | 王庭珪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vpfwsnKt2qCiRk9B5Gw7Pn | 王𬱖 | accepted |
| children | p_e4DAa8yV3zFmoVRECMT3J6 | 王頔 | accepted |
| other | p_NKDBjDH5rA2rPZeJXPzJ9F | 王庭珍 | accepted |

## 外部来源

- [维基数据：王𬱖（Q45373697）](https://www.wikidata.org/wiki/Q45373697)
- [维基数据：王庭珪（Q45373661）](https://www.wikidata.org/wiki/Q45373661)
- [中国历代人物传记资料库：王頔（CBDB 12170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12170&o=json)
- [中国历代人物传记资料库：王庭珍（CBDB 12169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12169&o=json)
- [CBDB 中国历代人物传记资料库：王庭珪（12158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12158&o=json)
