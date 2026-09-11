---
schema: wang-person/v1
id: p_K5DCxt9Hya2SyZizPQeDCw
status: active
merged_into: null
display_name: 王撰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qg1EY3q1hNnE1Eq4c62LXt
        subject_person_id: p_K5DCxt9Hya2SyZizPQeDCw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1bbigk38LUHP8e429S6g7k
          claim_id: c_qg1EY3q1hNnE1Eq4c62LXt
          source_id: s_z2iCKja37tcA6G3fr6kpMX
          stance: supports
          locator: CBDB:69433
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69433）
          source: &a1
            id: s_z2iCKja37tcA6G3fr6kpMX
            source_type: api_record
            title: 中国历代人物传记资料库：王撰（CBDB 69433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69433&o=json
            external_identifier: CBDB:69433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.269Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_asNRT1B59ShSzhDuoH8xYN
        subject_person_id: p_K5DCxt9Hya2SyZizPQeDCw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1623年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4EUjX747DbhP2xYmickwH2
          claim_id: c_asNRT1B59ShSzhDuoH8xYN
          source_id: s_z2iCKja37tcA6G3fr6kpMX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Kwz2vxDmSvjsFKmu3JDNyX
        subject_person_id: p_K5DCxt9Hya2SyZizPQeDCw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1709年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XmQFYN6xx9CxBKMxk5FwZc
          claim_id: c_Kwz2vxDmSvjsFKmu3JDNyX
          source_id: s_z2iCKja37tcA6G3fr6kpMX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KJDvB6RcByLdspjWKx7Bv1
        subject_person_id: p_K5DCxt9Hya2SyZizPQeDCw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撰（1623年—1709年），清人物。籍贯太倉直隸州，身份为書法家、畫家，入仕監生。（中国历代人物传记资料库 CBDB 69433）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6dcEQbA2QrWROVC6_GSWeV
          claim_id: c_KJDvB6RcByLdspjWKx7Bv1
          source_id: s_z2iCKja37tcA6G3fr6kpMX
          stance: supports
          locator: CBDB:69433
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qtkVSHyBDqwHGG-uz_14LS
        subject_person_id: p_HWF5mXUhrhbQxoWV5rhmVR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K5DCxt9Hya2SyZizPQeDCw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eir87uuM5h4TnmBRIyqtR4
          claim_id: c_qtkVSHyBDqwHGG-uz_14LS
          source_id: s_9nCMaerC4DaYCofcJD8XP7
          stance: supports
          locator: 國朝畫徵錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9nCMaerC4DaYCofcJD8XP7
            source_type: api_record
            title: 中国历代人物传记资料库：王時敏（CBDB 55432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55432&o=json
            external_identifier: CBDB:55432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HWF5mXUhrhbQxoWV5rhmVR
        status: active
        display_name: 王時敏
        merged_into_person_id: null
  children:
    - claim:
        id: c_f7uoBVPLPU5PvkIW81IT__
        subject_person_id: p_K5DCxt9Hya2SyZizPQeDCw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WBhrTg32DYhXYkjiaMMsBy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_scj1h2Eg_rsWnkvHTyTd6R
          claim_id: c_f7uoBVPLPU5PvkIW81IT__
          source_id: s_MHAbQ5koNbkbmfiGdTe1Ms
          stance: supports
          locator: 國朝畫徵錄：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MHAbQ5koNbkbmfiGdTe1Ms
            source_type: api_record
            title: 中国历代人物传记资料库：王原祁（CBDB 65759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65759&o=json
            external_identifier: CBDB:65759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WBhrTg32DYhXYkjiaMMsBy
        status: active
        display_name: 王原祁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王撰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王撰 | accepted |
| birth.date | 1623年 | accepted |
| death.date | 1709年 | accepted |
| bio.summary | 王撰（1623年—1709年），清人物。籍贯太倉直隸州，身份为書法家、畫家，入仕監生。（中国历代人物传记资料库 CBDB 69433） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HWF5mXUhrhbQxoWV5rhmVR | 王時敏 | accepted |
| children | p_WBhrTg32DYhXYkjiaMMsBy | 王原祁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時敏（CBDB 55432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55432&o=json)
- [中国历代人物传记资料库：王原祁（CBDB 65759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65759&o=json)
- [中国历代人物传记资料库：王撰（CBDB 69433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69433&o=json)
