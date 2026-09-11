---
schema: wang-person/v1
id: p_CJanQ26LPweM6g5VScYwJ4
status: active
merged_into: null
display_name: 王諸
cbdb_id: 158215
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ggWw89XjtfD4sSyoLWFgkg
        subject_person_id: p_CJanQ26LPweM6g5VScYwJ4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諸，唐人物。中国历代人物传记资料库（CBDB）以人物编号 158215 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_QjLhZas08FSDfMPRalciYS
          claim_id: c_ggWw89XjtfD4sSyoLWFgkg
          source_id: s_oFkhdhAiDC8VqDwBKqZ1QB
          stance: supports
          locator: CBDB:158215
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oFkhdhAiDC8VqDwBKqZ1QB
            source_type: api_record
            title: 中国历代人物传记资料库：王諸（CBDB 158215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158215&o=json
            external_identifier: CBDB:158215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XkH9FPzpNWhdhixPW272BK
        subject_person_id: p_CJanQ26LPweM6g5VScYwJ4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZuDXMJQESZUTQijGDoEBAE
          claim_id: c_XkH9FPzpNWhdhixPW272BK
          source_id: s_oFkhdhAiDC8VqDwBKqZ1QB
          stance: supports
          locator: CBDB:158215
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_oFkhdhAiDC8VqDwBKqZ1QB
            source_type: api_record
            title: 中国历代人物传记资料库：王諸（CBDB 158215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158215&o=json
            external_identifier: CBDB:158215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-QbgvotqfXEkMtWvQ99WMx
        subject_person_id: p_wiB79NcNQHJ368q4MoQvKy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CJanQ26LPweM6g5VScYwJ4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fxBAEafd8euBgGs_WIdouD
          claim_id: c_-QbgvotqfXEkMtWvQ99WMx
          source_id: s_oFkhdhAiDC8VqDwBKqZ1QB
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wiB79NcNQHJ368q4MoQvKy
        status: active
        display_name: 王曾
        merged_into_person_id: null
  children:
    - claim:
        id: c_aEmjFu3pozB403IQSVZ6Rb
        subject_person_id: p_CJanQ26LPweM6g5VScYwJ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jgn8VYTBiMsG4c6hVqFPc3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-bNoNw2BdLF8XKHx-q-RJw
          claim_id: c_aEmjFu3pozB403IQSVZ6Rb
          source_id: s_oFkhdhAiDC8VqDwBKqZ1QB
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 11：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jgn8VYTBiMsG4c6hVqFPc3
        status: active
        display_name: 王修本
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王諸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王諸，唐人物。中国历代人物传记资料库（CBDB）以人物编号 158215 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王諸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wiB79NcNQHJ368q4MoQvKy | 王曾 | accepted |
| children | p_jgn8VYTBiMsG4c6hVqFPc3 | 王修本 | accepted |

## 外部来源

- [中国历代人物传记资料库：王諸（CBDB 158215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158215&o=json)
