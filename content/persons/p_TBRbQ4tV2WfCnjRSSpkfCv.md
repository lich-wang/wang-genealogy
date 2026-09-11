---
schema: wang-person/v1
id: p_TBRbQ4tV2WfCnjRSSpkfCv
status: active
merged_into: null
display_name: 王釗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LCHM8phCEeW8pyEwnzXtAP
        subject_person_id: p_TBRbQ4tV2WfCnjRSSpkfCv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r6A7GVEgXM1PQsEP8H1Y44
          claim_id: c_LCHM8phCEeW8pyEwnzXtAP
          source_id: s_AUmRYtZmALA83dy11dYBDU
          stance: supports
          locator: CBDB:277069
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（277069）
          source: &a1
            id: s_AUmRYtZmALA83dy11dYBDU
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 277069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277069&o=json
            external_identifier: CBDB:277069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8LCPyKFjskJM5j8L913Tft
        subject_person_id: p_TBRbQ4tV2WfCnjRSSpkfCv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗，明人物。正德六年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 277069）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ayTI9xsClOeJPOpk074HlC
          claim_id: c_8LCPyKFjskJM5j8L913Tft
          source_id: s_AUmRYtZmALA83dy11dYBDU
          stance: supports
          locator: CBDB:277069
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_oKgdASimluV1KOgc84qxZr
        subject_person_id: p_TBRbQ4tV2WfCnjRSSpkfCv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CcL9yeQgRriMhVY3hPmz5a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1xvAUmyWJk_Rsa1c2CbCXm
          claim_id: c_oKgdASimluV1KOgc84qxZr
          source_id: s_iysWTAJR6jgb14GmHUSJck
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iysWTAJR6jgb14GmHUSJck
            source_type: api_record
            title: 中国历代人物传记资料库：王江（CBDB 126498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126498&o=json
            external_identifier: CBDB:126498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CcL9yeQgRriMhVY3hPmz5a
        status: active
        display_name: 王江
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王釗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釗 | accepted |
| bio.summary | 王釗，明人物。正德六年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 277069） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CcL9yeQgRriMhVY3hPmz5a | 王江 | accepted |

## 外部来源

- [中国历代人物传记资料库：王江（CBDB 126498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126498&o=json)
- [中国历代人物传记资料库：王釗（CBDB 277069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277069&o=json)
