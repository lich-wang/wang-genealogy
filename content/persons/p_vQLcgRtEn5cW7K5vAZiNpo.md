---
schema: wang-person/v1
id: p_vQLcgRtEn5cW7K5vAZiNpo
status: active
merged_into: null
display_name: 孫氏
revision: 1
cbdb_id: 322376
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oIIrQDUwZgIG7DyUEzpMvn
        subject_person_id: p_vQLcgRtEn5cW7K5vAZiNpo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏，明人物。宣德五年進士。（中国历代人物传记资料库 CBDB 322376）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MimotrVF_u8jxqCFAks-vz
          claim_id: c_oIIrQDUwZgIG7DyUEzpMvn
          source_id: s_9rFx1KQfK8u-T8liKOoCO2
          stance: supports
          locator: CBDB:322376
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9rFx1KQfK8u-T8liKOoCO2
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王偡妻)（CBDB 322376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322376&o=json
            external_identifier: CBDB:322376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_0rQmJ5sly8sK-ItAgLDRlY
        subject_person_id: p_vQLcgRtEn5cW7K5vAZiNpo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1dJSAZlp_-GwJn20N5sOhN
          claim_id: c_0rQmJ5sly8sK-ItAgLDRlY
          source_id: s_9rFx1KQfK8u-T8liKOoCO2
          stance: supports
          locator: CBDB:322376
          quotation: null
          interpretation_note: CBDB 明确记录的王偡配偶
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
        id: c_Z0us88PoXan55cyx5yA1gR
        subject_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_vQLcgRtEn5cW7K5vAZiNpo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7xgQuGMhA0stRnd3M8LMmQ
          claim_id: c_Z0us88PoXan55cyx5yA1gR
          source_id: s_9rFx1KQfK8u-T8liKOoCO2
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Lt4MQ464DWHGJk9hxD73Kf
        status: active
        display_name: 王偡
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孫氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 孫氏，明人物。宣德五年進士。（中国历代人物传记资料库 CBDB 322376） | accepted |
| name.primary | 孫氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Lt4MQ464DWHGJk9hxD73Kf | 王偡 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王偡妻)（CBDB 322376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322376&o=json)
