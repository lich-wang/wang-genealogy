---
schema: wang-person/v1
id: p_uRxHoeETPENUnB4UpGZ636
status: active
merged_into: null
display_name: 王崇古
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N8yocVVq2sKJ7v9FFmJdhw
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z5P5sbrCB5WR98F7KYkAAR
          claim_id: c_N8yocVVq2sKJ7v9FFmJdhw
          source_id: s_35VSXdNh52Bdmbnof9F1w5
          stance: supports
          locator: CBDB:215866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215866）
          source: &a1
            id: s_35VSXdNh52Bdmbnof9F1w5
            source_type: api_record
            title: 中国历代人物传记资料库：王崇古（CBDB 215866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215866&o=json
            external_identifier: CBDB:215866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.201Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AVUrUfRFfxDtw5YaU7gtTa
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇古，明人物。萬曆五年進士，籍贯蒲州，曾任少保、太子太保、刑部尚書。（中国历代人物传记资料库 CBDB 215866）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q-Bem0Yjhp0wPCYkttjkDB
          claim_id: c_AVUrUfRFfxDtw5YaU7gtTa
          source_id: s_35VSXdNh52Bdmbnof9F1w5
          stance: supports
          locator: CBDB:215866
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1NDRlcLlQpXVJoy7_kUuF5
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_68bfPNUHA98KKMwPnJ12C3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gvbsKpU1r9rlDHokifAAo5
          claim_id: c_1NDRlcLlQpXVJoy7_kUuF5
          source_id: s_HXFJiTCNt1A5HD2f7yj48e
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HXFJiTCNt1A5HD2f7yj48e
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 124982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124982&o=json
            external_identifier: CBDB:124982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_68bfPNUHA98KKMwPnJ12C3
        status: active
        display_name: 王謙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇古 | accepted |
| bio.summary | 王崇古，明人物。萬曆五年進士，籍贯蒲州，曾任少保、太子太保、刑部尚書。（中国历代人物传记资料库 CBDB 215866） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_68bfPNUHA98KKMwPnJ12C3 | 王謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇古（CBDB 215866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215866&o=json)
- [中国历代人物传记资料库：王謙（CBDB 124982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124982&o=json)
