---
schema: wang-person/v1
id: p_iHe6tY3fRQ5DPM5JoEnDQ6
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 557760
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_egPROpuoPNE5L9gsy42Ff4
        subject_person_id: p_iHe6tY3fRQ5DPM5JoEnDQ6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4fseM7lGIdkutRpcBQxBTT
          claim_id: c_egPROpuoPNE5L9gsy42Ff4
          source_id: s_98ibL1Btwe_BJ5JqqZ1hyA
          stance: supports
          locator: CBDB:557760
          quotation: null
          interpretation_note: CBDB 明确记录的王濟民配偶
          source: &a1
            id: s_98ibL1Btwe_BJ5JqqZ1hyA
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王濟民妻)（CBDB 557760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557760&o=json
            external_identifier: CBDB:557760
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
        id: c_D-EaTBwpUzf3HqCE0GVA-U
        subject_person_id: p_BVo3P1rTLnR5yWXE7paCRv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iHe6tY3fRQ5DPM5JoEnDQ6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9K_WlRi9RiQteWEAxmg2x4
          claim_id: c_D-EaTBwpUzf3HqCE0GVA-U
          source_id: s_98ibL1Btwe_BJ5JqqZ1hyA
          stance: supports
          locator: (乾隆)信陽州志，lgid=868520：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BVo3P1rTLnR5yWXE7paCRv
        status: active
        display_name: 王濟民
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BVo3P1rTLnR5yWXE7paCRv | 王濟民 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王濟民妻)（CBDB 557760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557760&o=json)
