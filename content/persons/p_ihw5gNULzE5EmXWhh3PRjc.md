---
schema: wang-person/v1
id: p_ihw5gNULzE5EmXWhh3PRjc
status: active
merged_into: null
display_name: 王廉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zWoy6QMSxCd5bZdwjZgiYF
        subject_person_id: p_ihw5gNULzE5EmXWhh3PRjc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_obbuE7b88cGonV9RFA4QUD
          claim_id: c_zWoy6QMSxCd5bZdwjZgiYF
          source_id: s_RKve6C2WDaFFcbfQkqUJzx
          stance: supports
          locator: CBDB:283881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283881）
          source: &a1
            id: s_RKve6C2WDaFFcbfQkqUJzx
            source_type: api_record
            title: 中国历代人物传记资料库：王廉（CBDB 283881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283881&o=json
            external_identifier: CBDB:283881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_es9XRANcPCA5mBTuyksX87
        subject_person_id: p_ihw5gNULzE5EmXWhh3PRjc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廉，明人物。正德十六年進士，曾任指揮僉事。（中国历代人物传记资料库 CBDB 283881）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wubg0SOLthXmu1caI4ziY1
          claim_id: c_es9XRANcPCA5mBTuyksX87
          source_id: s_RKve6C2WDaFFcbfQkqUJzx
          stance: supports
          locator: CBDB:283881
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_nI35-QR7b3e4wbyhUvIIys
        subject_person_id: p_ihw5gNULzE5EmXWhh3PRjc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3PG8IEgIGoLYOxSBWtt8RE
          claim_id: c_nI35-QR7b3e4wbyhUvIIys
          source_id: s_yeDS7MthSZ69rfW6mZGg3S
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yeDS7MthSZ69rfW6mZGg3S
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 202119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202119&o=json
            external_identifier: CBDB:202119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.722Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AfLhoGsLbskzeER6Tw4Mw8
        status: active
        display_name: 王道
        merged_into_person_id: null
  other: []
---

# 王廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廉 | accepted |
| bio.summary | 王廉，明人物。正德十六年進士，曾任指揮僉事。（中国历代人物传记资料库 CBDB 283881） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AfLhoGsLbskzeER6Tw4Mw8 | 王道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 202119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202119&o=json)
- [中国历代人物传记资料库：王廉（CBDB 283881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283881&o=json)
