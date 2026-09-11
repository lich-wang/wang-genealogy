---
schema: wang-person/v1
id: p_GGpPpPGjxpqJed9SdSfz9D
status: active
merged_into: null
display_name: 蔡氏
revision: 1
cbdb_id: 241176
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w1qQiIsFSXOC4KQf2eQpmH
        subject_person_id: p_GGpPpPGjxpqJed9SdSfz9D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔡氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KAyhjy-x1Jc3JW5blHq5sJ
          claim_id: c_w1qQiIsFSXOC4KQf2eQpmH
          source_id: s_v_mU_IssHuAIlrbgGpeAAP
          stance: supports
          locator: CBDB:241176
          quotation: null
          interpretation_note: CBDB 明确记录的王玭配偶
          source: &a1
            id: s_v_mU_IssHuAIlrbgGpeAAP
            source_type: api_record
            title: 中国历代人物传记资料库：蔡氏(王玭妻)（CBDB 241176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241176&o=json
            external_identifier: CBDB:241176
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
        id: c_3yu20W2uf_oHi-kL9VRAy1
        subject_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GGpPpPGjxpqJed9SdSfz9D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__CrSMmssTsNLy6dhL6NVmm
          claim_id: c_3yu20W2uf_oHi-kL9VRAy1
          source_id: s_v_mU_IssHuAIlrbgGpeAAP
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第六十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GZ9FC3xVw4crRVvp7UDQTX
        status: active
        display_name: 王玭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蔡氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 蔡氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_GZ9FC3xVw4crRVvp7UDQTX | 王玭 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔡氏(王玭妻)（CBDB 241176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241176&o=json)
