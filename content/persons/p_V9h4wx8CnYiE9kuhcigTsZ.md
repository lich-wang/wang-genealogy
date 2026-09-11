---
schema: wang-person/v1
id: p_V9h4wx8CnYiE9kuhcigTsZ
status: active
merged_into: null
display_name: 王橋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JV7SQWZB4P2myi8XCSP44R
        subject_person_id: p_V9h4wx8CnYiE9kuhcigTsZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CUgBDm4ZCddXQy2B54mGjP
          claim_id: c_JV7SQWZB4P2myi8XCSP44R
          source_id: s_xX7pjSv1g5C9KDvPVmztTM
          stance: supports
          locator: CBDB:206070
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206070）
          source: &a1
            id: s_xX7pjSv1g5C9KDvPVmztTM
            source_type: api_record
            title: 中国历代人物传记资料库：王橋（CBDB 206070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206070&o=json
            external_identifier: CBDB:206070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9Y4aQQ85BmCfbRVELEtPnY
        subject_person_id: p_V9h4wx8CnYiE9kuhcigTsZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1543年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_phLteHxTQ68C26RfiXZxzx
          claim_id: c_9Y4aQQ85BmCfbRVELEtPnY
          source_id: s_xX7pjSv1g5C9KDvPVmztTM
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
        id: c_y3sBKKtVHWboGQZjS3eomD
        subject_person_id: p_V9h4wx8CnYiE9kuhcigTsZ
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
        - id: cs_FwAX2JkBMzaFmxy6M5CCFK
          claim_id: c_y3sBKKtVHWboGQZjS3eomD
          source_id: s_xX7pjSv1g5C9KDvPVmztTM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DEYgKyQHrFW7uanvrPlQKn
        subject_person_id: p_PbkuFaTj8zwtE1ycxfeDz1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V9h4wx8CnYiE9kuhcigTsZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hFPqQXvf4-sPkzb2Mhu9Vh
          claim_id: c_DEYgKyQHrFW7uanvrPlQKn
          source_id: s_Z5RGaTY8MQ83mEMsFu3ozb
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第五十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z5RGaTY8MQ83mEMsFu3ozb
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 212930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212930&o=json
            external_identifier: CBDB:212930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PbkuFaTj8zwtE1ycxfeDz1
        status: active
        display_name: 王鉉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王橋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王橋 | accepted |
| birth.date | 1543年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_PbkuFaTj8zwtE1ycxfeDz1 | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王橋（CBDB 206070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206070&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 212930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212930&o=json)
