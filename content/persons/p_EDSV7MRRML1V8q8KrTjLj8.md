---
schema: wang-person/v1
id: p_EDSV7MRRML1V8q8KrTjLj8
status: active
merged_into: null
display_name: 徐氏
revision: 1
cbdb_id: 259209
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VJX05CtPtTr6eF2dmJSkMA
        subject_person_id: p_EDSV7MRRML1V8q8KrTjLj8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐氏，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 259209）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oJEGVj22Auh9reEfEUfPzo
          claim_id: c_VJX05CtPtTr6eF2dmJSkMA
          source_id: s_kKplK-lsY7XQCdIaue1qd3
          stance: supports
          locator: CBDB:259209
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kKplK-lsY7XQCdIaue1qd3
            source_type: api_record
            title: 中国历代人物传记资料库：徐氏(王恩妻)（CBDB 259209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259209&o=json
            external_identifier: CBDB:259209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_-sG8fYod8zCWtdWsTVsVi-
        subject_person_id: p_EDSV7MRRML1V8q8KrTjLj8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QOcHIFqOuH8LIydZQJmWgD
          claim_id: c_-sG8fYod8zCWtdWsTVsVi-
          source_id: s_kKplK-lsY7XQCdIaue1qd3
          stance: supports
          locator: CBDB:259209
          quotation: null
          interpretation_note: CBDB 明确记录的王恩配偶
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
        id: c_KBhVE-ETMNZFsVA00ig5W5
        subject_person_id: p_8kdsz31LsNcXBMccuK9UD2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EDSV7MRRML1V8q8KrTjLj8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GL0uI3JnYrdEBpm0-NYB1g
          claim_id: c_KBhVE-ETMNZFsVA00ig5W5
          source_id: s_kKplK-lsY7XQCdIaue1qd3
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第六十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8kdsz31LsNcXBMccuK9UD2
        status: active
        display_name: 王恩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 徐氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 徐氏，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 259209） | accepted |
| name.primary | 徐氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_8kdsz31LsNcXBMccuK9UD2 | 王恩 | accepted |

## 外部来源

- [中国历代人物传记资料库：徐氏(王恩妻)（CBDB 259209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259209&o=json)
