---
schema: wang-person/v1
id: p_WQ5WNZ4pQzEpMo4mdqs5xb
status: active
merged_into: null
display_name: 柳氏
cbdb_id: 444926
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_41f8c_M8zfCnrzWQ8bAJzO
        subject_person_id: p_WQ5WNZ4pQzEpMo4mdqs5xb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 柳氏，唐人物。身份为外戚，曾任國夫人。（中国历代人物传记资料库 CBDB 444926）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xLLzo8ixBfK_rqeKQixeDp
          claim_id: c_41f8c_M8zfCnrzWQ8bAJzO
          source_id: s_SniQU9kNa6gfuLW2Mi2Xw9
          stance: supports
          locator: CBDB:444926
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SniQU9kNa6gfuLW2Mi2Xw9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：柳氏（444926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444926&o=json
            external_identifier: CBDB:444926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:00:00.115Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PiQ93AHV924ZXWEdveeQZ2
        subject_person_id: p_WQ5WNZ4pQzEpMo4mdqs5xb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 柳氏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9C3KnCtieuQ22jLLuPdcsE
          claim_id: c_PiQ93AHV924ZXWEdveeQZ2
          source_id: s_SniQU9kNa6gfuLW2Mi2Xw9
          stance: supports
          locator: CBDB:444926
          quotation: null
          interpretation_note: null
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
        id: c_gBAdGt2JoHTa6c3RuHTQL9
        subject_person_id: p_WQ5WNZ4pQzEpMo4mdqs5xb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_pw5PbWZzfQQNgNYXwrhd1t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_xijFbNrLpCk67koC2JA8Lu
          claim_id: c_gBAdGt2JoHTa6c3RuHTQL9
          source_id: s_qnG6ovBLWZk7x5pVMmh3SK
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：舊唐書
          source:
            id: s_qnG6ovBLWZk7x5pVMmh3SK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仁祐（378895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378895&o=json
            external_identifier: CBDB:378895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:39:52.262Z
            metadata_json: null
      object_person:
        id: p_pw5PbWZzfQQNgNYXwrhd1t
        status: active
        display_name: 王仁祐
        merged_into_person_id: null
    - claim:
        id: c_Z1dIyxr1GmuXEiKqtdNYjf
        subject_person_id: p_pw5PbWZzfQQNgNYXwrhd1t
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WQ5WNZ4pQzEpMo4mdqs5xb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sSBoGt7510amjbOMM7BqNK
          claim_id: c_Z1dIyxr1GmuXEiKqtdNYjf
          source_id: s_qnG6ovBLWZk7x5pVMmh3SK
          stance: supports
          locator: 舊唐書，2169：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qnG6ovBLWZk7x5pVMmh3SK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仁祐（378895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378895&o=json
            external_identifier: CBDB:378895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:39:52.262Z
            metadata_json: null
      object_person:
        id: p_pw5PbWZzfQQNgNYXwrhd1t
        status: active
        display_name: 王仁祐
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 柳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 柳氏，唐人物。身份为外戚，曾任國夫人。（中国历代人物传记资料库 CBDB 444926） | accepted |
| name.primary | 柳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_pw5PbWZzfQQNgNYXwrhd1t | 王仁祐 | accepted |
| spouses | p_pw5PbWZzfQQNgNYXwrhd1t | 王仁祐 | accepted |

## 外部来源

- [CBDB 中国历代人物传记资料库：柳氏（444926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444926&o=json)
- [CBDB 中国历代人物传记资料库：王仁祐（378895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=378895&o=json)
