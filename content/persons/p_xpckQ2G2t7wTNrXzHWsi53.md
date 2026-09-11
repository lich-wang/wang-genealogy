---
schema: wang-person/v1
id: p_xpckQ2G2t7wTNrXzHWsi53
status: active
merged_into: null
display_name: 王霽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JpS77ge312CPN3REyasbzw
        subject_person_id: p_xpckQ2G2t7wTNrXzHWsi53
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hf2hvvj34i7SbQHm23QkmB
          claim_id: c_JpS77ge312CPN3REyasbzw
          source_id: s_ocd7oUfXfL3b36MEGhirbv
          stance: supports
          locator: CBDB:203388
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203388）
          source: &a1
            id: s_ocd7oUfXfL3b36MEGhirbv
            source_type: api_record
            title: 中国历代人物传记资料库：王霽（CBDB 203388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203388&o=json
            external_identifier: CBDB:203388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rBbNU8bz2RpzARGe9AJJig
        subject_person_id: p_xpckQ2G2t7wTNrXzHWsi53
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1506年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aF2mzfQG5QMX8MF2wvSJ1D
          claim_id: c_rBbNU8bz2RpzARGe9AJJig
          source_id: s_ocd7oUfXfL3b36MEGhirbv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EjHs26B1fmFKtjz2TmK8hC
        subject_person_id: p_xpckQ2G2t7wTNrXzHWsi53
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GhcqMBBKyoAuw1mtMoW5fL
          claim_id: c_EjHs26B1fmFKtjz2TmK8hC
          source_id: s_ocd7oUfXfL3b36MEGhirbv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wV5kZqG4jm8y4DedXq-CWU
        subject_person_id: p_MrBW6wRCgoY5prUKEsRfTq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xpckQ2G2t7wTNrXzHWsi53
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FnbE6TVi9LCgSCOwwgv9JW
          claim_id: c_wV5kZqG4jm8y4DedXq-CWU
          source_id: s_dcyMTBaaoftzT15eSX7G5D
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dcyMTBaaoftzT15eSX7G5D
            source_type: api_record
            title: 中国历代人物传记资料库：王廷賓（CBDB 303978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303978&o=json
            external_identifier: CBDB:303978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MrBW6wRCgoY5prUKEsRfTq
        status: active
        display_name: 王廷賓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王霽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霽 | accepted |
| birth.date | 1506年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MrBW6wRCgoY5prUKEsRfTq | 王廷賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王霽（CBDB 203388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203388&o=json)
- [中国历代人物传记资料库：王廷賓（CBDB 303978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303978&o=json)
