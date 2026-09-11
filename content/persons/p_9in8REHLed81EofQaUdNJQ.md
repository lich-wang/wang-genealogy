---
schema: wang-person/v1
id: p_9in8REHLed81EofQaUdNJQ
status: active
merged_into: null
display_name: 王伯履
cbdb_id: 253504
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7YSGEqxBzi4PobqF7VMHvT
        subject_person_id: p_9in8REHLed81EofQaUdNJQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯履，明人物。中国历代人物传记资料库（CBDB）以人物编号 253504 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_KtGPjr25Qa9nZ7ggRQAeKP
          claim_id: c_7YSGEqxBzi4PobqF7VMHvT
          source_id: s_kzyuMzNhurzE6X9M6WoGnN
          stance: supports
          locator: CBDB:253504
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kzyuMzNhurzE6X9M6WoGnN
            source_type: api_record
            title: 中国历代人物传记资料库：王伯履（CBDB 253504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253504&o=json
            external_identifier: CBDB:253504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UCwabZ8p5t1e5G1KDanWrM
        subject_person_id: p_9in8REHLed81EofQaUdNJQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯履
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C324GRm9GD1h3ooCc5A81H
          claim_id: c_UCwabZ8p5t1e5G1KDanWrM
          source_id: s_kzyuMzNhurzE6X9M6WoGnN
          stance: supports
          locator: CBDB:253504
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_kzyuMzNhurzE6X9M6WoGnN
            source_type: api_record
            title: 中国历代人物传记资料库：王伯履（CBDB 253504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253504&o=json
            external_identifier: CBDB:253504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_rraBfa9mqxD5o8h0RuvVZv
        subject_person_id: p_9in8REHLed81EofQaUdNJQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sEeXqdWXxCSXF7ps67if1m
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oOFQ6RIyckOpANmMPXTPUq
          claim_id: c_rraBfa9mqxD5o8h0RuvVZv
          source_id: s_kzyuMzNhurzE6X9M6WoGnN
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百九十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sEeXqdWXxCSXF7ps67if1m
        status: active
        display_name: 王朝器
        merged_into_person_id: null
  other: []
---

# 王伯履

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伯履，明人物。中国历代人物传记资料库（CBDB）以人物编号 253504 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王伯履 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_sEeXqdWXxCSXF7ps67if1m | 王朝器 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯履（CBDB 253504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253504&o=json)
