---
schema: wang-person/v1
id: p_GwTmgLY74DWW5r4UnQF1Tu
status: active
merged_into: null
display_name: 王椿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Fr8D8QkoMJRq73B5qKHKT
        subject_person_id: p_GwTmgLY74DWW5r4UnQF1Tu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D79KoDNWNbCqNrcE9Gbjq4
          claim_id: c_2Fr8D8QkoMJRq73B5qKHKT
          source_id: s_1f3EAHBiKAnHLbBzA8oASC
          stance: supports
          locator: CBDB:297078
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297078）
          source: &a1
            id: s_1f3EAHBiKAnHLbBzA8oASC
            source_type: api_record
            title: 中国历代人物传记资料库：王椿（CBDB 297078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297078&o=json
            external_identifier: CBDB:297078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.544Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C1XV3vZFwjGCTA4pSowYBc
        subject_person_id: p_GwTmgLY74DWW5r4UnQF1Tu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椿，明人物。嘉靖十四年進士，籍贯餘姚，曾任大理寺評事。（中国历代人物传记资料库 CBDB 297078）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_td9rpDWLrEjvpvgs5m1r_q
          claim_id: c_C1XV3vZFwjGCTA4pSowYBc
          source_id: s_1f3EAHBiKAnHLbBzA8oASC
          stance: supports
          locator: CBDB:297078
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_rNMULWMLUdYYr96kuNgGXg
        subject_person_id: p_GwTmgLY74DWW5r4UnQF1Tu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DPKdYaX4f6yTudovTApGHk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_augqa2_Z9evQG76oFd6ukJ
          claim_id: c_rNMULWMLUdYYr96kuNgGXg
          source_id: s_1f3EAHBiKAnHLbBzA8oASC
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第九十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DPKdYaX4f6yTudovTApGHk
        status: active
        display_name: 王喬齡
        merged_into_person_id: null
    - claim:
        id: c_lumCVja-SvP5l7nRYk6E7P
        subject_person_id: p_GwTmgLY74DWW5r4UnQF1Tu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JE4JHCNRPza84DMSHaNQDc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__P2siUJJSBGG6rZI7jYGhE
          claim_id: c_lumCVja-SvP5l7nRYk6E7P
          source_id: s_1f3EAHBiKAnHLbBzA8oASC
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百二十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JE4JHCNRPza84DMSHaNQDc
        status: active
        display_name: 王嵩
        merged_into_person_id: null
    - claim:
        id: c_qFh2K00dAwmR6T5Bg0pC2x
        subject_person_id: p_GwTmgLY74DWW5r4UnQF1Tu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eWz6n9dJmmq7bLYGzf43MX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9dhYHe_P0b8S3P5tp5t8Am
          claim_id: c_qFh2K00dAwmR6T5Bg0pC2x
          source_id: s_UhRAciwCDm-BOe98otdIqM
          stance: supports
          locator: CBDB：兄弟 王喬齡（202941）之父／母 王椿
          quotation: null
          interpretation_note: 由兄弟关系推断：王高 与 王喬齡 为同胞（CBDB 记「兄」），王喬齡 之父／母即 王高 之父／母。
          source:
            id: s_UhRAciwCDm-BOe98otdIqM
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 297083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297083&o=json
            external_identifier: CBDB:297083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eWz6n9dJmmq7bLYGzf43MX
        status: active
        display_name: 王高
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王椿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王椿 | accepted |
| bio.summary | 王椿，明人物。嘉靖十四年進士，籍贯餘姚，曾任大理寺評事。（中国历代人物传记资料库 CBDB 297078） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DPKdYaX4f6yTudovTApGHk | 王喬齡 | accepted |
| children | p_JE4JHCNRPza84DMSHaNQDc | 王嵩 | accepted |
| children | p_eWz6n9dJmmq7bLYGzf43MX | 王高 | accepted |

## 外部来源

- [中国历代人物传记资料库：王椿（CBDB 297078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297078&o=json)
- [中国历代人物传记资料库：王高（CBDB 297083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297083&o=json)
