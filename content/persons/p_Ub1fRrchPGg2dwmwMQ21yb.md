---
schema: wang-person/v1
id: p_Ub1fRrchPGg2dwmwMQ21yb
status: active
merged_into: null
display_name: 王用賢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hfMsXF5bC8EViCtgQfTpUD
        subject_person_id: p_Ub1fRrchPGg2dwmwMQ21yb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H9h9r9FiZh34NR2AKM3yrS
          claim_id: c_hfMsXF5bC8EViCtgQfTpUD
          source_id: s_qkGKboE2ToSSPEpWSVG7Px
          stance: supports
          locator: CBDB:222274
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222274）
          source: &a1
            id: s_qkGKboE2ToSSPEpWSVG7Px
            source_type: api_record
            title: 中国历代人物传记资料库：王用賢（CBDB 222274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222274&o=json
            external_identifier: CBDB:222274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3TQSwNPPea9HpYX48TJotF
        subject_person_id: p_Ub1fRrchPGg2dwmwMQ21yb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賢，明人物。萬曆十一年進士，曾任縣丞。（中国历代人物传记资料库 CBDB 222274）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kf8RJ1ieeOsFQFOPSgUUHI
          claim_id: c_3TQSwNPPea9HpYX48TJotF
          source_id: s_qkGKboE2ToSSPEpWSVG7Px
          stance: supports
          locator: CBDB:222274
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
        id: c_j8msgjtkCh7G1Hr_j-ePcp
        subject_person_id: p_Ub1fRrchPGg2dwmwMQ21yb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_stumq3LKUX83aY7FDSYoQ9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2ZRqbzWnUSwXSPtaWWTQXW
          claim_id: c_j8msgjtkCh7G1Hr_j-ePcp
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_51SNKp1DcDfU2auLpQ39Cr
            source_type: api_record
            title: 中国历代人物传记资料库：王紹先（CBDB 206726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206726&o=json
            external_identifier: CBDB:206726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_stumq3LKUX83aY7FDSYoQ9
        status: active
        display_name: 王紹先
        merged_into_person_id: null
  other: []
---

# 王用賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用賢 | accepted |
| bio.summary | 王用賢，明人物。萬曆十一年進士，曾任縣丞。（中国历代人物传记资料库 CBDB 222274） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_stumq3LKUX83aY7FDSYoQ9 | 王紹先 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹先（CBDB 206726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206726&o=json)
- [中国历代人物传记资料库：王用賢（CBDB 222274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222274&o=json)
