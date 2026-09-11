---
schema: wang-person/v1
id: p_XjjMKXMi1LcwhZ2dwyqzpR
status: active
merged_into: null
display_name: 王曾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TFSht3AWSTdPwiTbs8dUug
        subject_person_id: p_XjjMKXMi1LcwhZ2dwyqzpR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sv581K687L9NwGatKjitpz
          claim_id: c_TFSht3AWSTdPwiTbs8dUug
          source_id: s_3a798Jd9MxoeGzQNuDMS9C
          stance: supports
          locator: CBDB:257860
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257860）
          source: &a1
            id: s_3a798Jd9MxoeGzQNuDMS9C
            source_type: api_record
            title: 中国历代人物传记资料库：王曾（CBDB 257860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257860&o=json
            external_identifier: CBDB:257860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.432Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BZpwa3igUSNANKiLitEXiS
        subject_person_id: p_XjjMKXMi1LcwhZ2dwyqzpR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曾，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 257860）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GgGsZwrCm4SRs4urzrbN3P
          claim_id: c_BZpwa3igUSNANKiLitEXiS
          source_id: s_3a798Jd9MxoeGzQNuDMS9C
          stance: supports
          locator: CBDB:257860
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
        id: c_Wdg34zs-mIAy3WfmYC05DO
        subject_person_id: p_XjjMKXMi1LcwhZ2dwyqzpR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6zgueKBTLH65ghccEBpJUs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v-zXSZ4Us_xmdI9lbDilsC
          claim_id: c_Wdg34zs-mIAy3WfmYC05DO
          source_id: s_4uC29d4Vjc4o2MpghhPq5U
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第四十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4uC29d4Vjc4o2MpghhPq5U
            source_type: api_record
            title: 中国历代人物传记资料库：王軒（CBDB 200441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200441&o=json
            external_identifier: CBDB:200441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6zgueKBTLH65ghccEBpJUs
        status: active
        display_name: 王軒
        merged_into_person_id: null
  other: []
---

# 王曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曾 | accepted |
| bio.summary | 王曾，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 257860） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_6zgueKBTLH65ghccEBpJUs | 王軒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曾（CBDB 257860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257860&o=json)
- [中国历代人物传记资料库：王軒（CBDB 200441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200441&o=json)
