---
schema: wang-person/v1
id: p_Pa4GvkxNdRsHFY4NeGPTCS
status: active
merged_into: null
display_name: 施氏
revision: 1
cbdb_id: 570499
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_utUNI0VzP_4cNqVQ__VPTC
        subject_person_id: p_Pa4GvkxNdRsHFY4NeGPTCS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 施氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7YFui0WyWvKuTYzlc_UpH_
          claim_id: c_utUNI0VzP_4cNqVQ__VPTC
          source_id: s_XG0Ra4vrnMh5CCiG_OgcvV
          stance: supports
          locator: CBDB:570499
          quotation: null
          interpretation_note: CBDB 明确记录的王業偉配偶
          source: &a1
            id: s_XG0Ra4vrnMh5CCiG_OgcvV
            source_type: api_record
            title: 中国历代人物传记资料库：施氏(王業偉妻)（CBDB 570499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570499&o=json
            external_identifier: CBDB:570499
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
        id: c_129asyctHrdsb6bmvVDG5H
        subject_person_id: p_VQ1xeirYSn3z8RccAqYWTS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Pa4GvkxNdRsHFY4NeGPTCS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yH5QJti-5dsjMy-3Tt_j6s
          claim_id: c_129asyctHrdsb6bmvVDG5H
          source_id: s_XG0Ra4vrnMh5CCiG_OgcvV
          stance: supports
          locator: 紹興府志:八十卷，lgid=316825：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VQ1xeirYSn3z8RccAqYWTS
        status: active
        display_name: 王業偉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 施氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 施氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_VQ1xeirYSn3z8RccAqYWTS | 王業偉 | accepted |

## 外部来源

- [中国历代人物传记资料库：施氏(王業偉妻)（CBDB 570499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570499&o=json)
