---
schema: wang-person/v1
id: p_4wtubo8NYtGxkMFFTJaR7U
status: active
merged_into: null
display_name: 楊氏
revision: 1
cbdb_id: 297872
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zK3W-9c49PjrrhqNprj_7v
        subject_person_id: p_4wtubo8NYtGxkMFFTJaR7U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aQHh19UBfJ7xxZlEWO8IBX
          claim_id: c_zK3W-9c49PjrrhqNprj_7v
          source_id: s_5wCTteJxSWkzXjGvFNHhqi
          stance: supports
          locator: CBDB:297872
          quotation: null
          interpretation_note: CBDB 明确记录的王希賢配偶
          source: &a1
            id: s_5wCTteJxSWkzXjGvFNHhqi
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王希賢妻)（CBDB 297872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297872&o=json
            external_identifier: CBDB:297872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_fLiVSF--0Y2f3fAl-vq_pu
        subject_person_id: p_7D1Y7WN5ERwLJ26e35fypo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4wtubo8NYtGxkMFFTJaR7U
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k3HMF83VwLp0Xu-8Wl41m7
          claim_id: c_fLiVSF--0Y2f3fAl-vq_pu
          source_id: s_5wCTteJxSWkzXjGvFNHhqi
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百六十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7D1Y7WN5ERwLJ26e35fypo
        status: active
        display_name: 王希賢
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 楊氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 楊氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7D1Y7WN5ERwLJ26e35fypo | 王希賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：楊氏(王希賢妻)（CBDB 297872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297872&o=json)
